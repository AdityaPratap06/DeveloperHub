export type JsonDiffType = "added" | "removed" | "changed" | "unchanged";

export interface JsonDiffEntry {
  path: string;
  type: JsonDiffType;
  oldValue?: unknown;
  newValue?: unknown;
}

function sortKeys(obj: unknown): unknown {
  if (Array.isArray(obj)) return obj.map(sortKeys);
  if (obj && typeof obj === "object") {
    return Object.keys(obj as object)
      .sort()
      .reduce((acc: Record<string, unknown>, key) => {
        acc[key] = sortKeys((obj as Record<string, unknown>)[key]);
        return acc;
      }, {});
  }
  return obj;
}

function flatten(obj: unknown, prefix = ""): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  if (obj === null || obj === undefined) {
    result[prefix || "(root)"] = obj;
    return result;
  }
  if (typeof obj !== "object") {
    result[prefix || "(root)"] = obj;
    return result;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      Object.assign(result, flatten(item, `${prefix}[${i}]`));
    });
    if (obj.length === 0) result[prefix || "(root)"] = [];
    return result;
  }
  const keys = Object.keys(obj as object);
  if (keys.length === 0) {
    result[prefix || "(root)"] = {};
    return result;
  }
  for (const key of keys) {
    const path = prefix ? `${prefix}.${key}` : key;
    Object.assign(result, flatten((obj as Record<string, unknown>)[key], path));
  }
  return result;
}

export function compareJson(
  a: unknown,
  b: unknown,
  ignoreKeyOrder = false
): JsonDiffEntry[] {
  const left = ignoreKeyOrder ? sortKeys(a) : a;
  const right = ignoreKeyOrder ? sortKeys(b) : b;
  const flatA = flatten(left);
  const flatB = flatten(right);
  const allKeys = new Set([...Object.keys(flatA), ...Object.keys(flatB)]);
  const diffs: JsonDiffEntry[] = [];

  for (const path of Array.from(allKeys).sort()) {
    const inA = path in flatA;
    const inB = path in flatB;
    if (inA && !inB) {
      diffs.push({ path, type: "removed", oldValue: flatA[path] });
    } else if (!inA && inB) {
      diffs.push({ path, type: "added", newValue: flatB[path] });
    } else if (JSON.stringify(flatA[path]) !== JSON.stringify(flatB[path])) {
      diffs.push({ path, type: "changed", oldValue: flatA[path], newValue: flatB[path] });
    } else {
      diffs.push({ path, type: "unchanged", oldValue: flatA[path], newValue: flatB[path] });
    }
  }
  return diffs;
}

export function exportDiffReport(diffs: JsonDiffEntry[]): string {
  const changes = diffs.filter((d) => d.type !== "unchanged");
  const lines = [
    "JSON Diff Report",
    `Generated: ${new Date().toISOString()}`,
    `Total changes: ${changes.length}`,
    "---",
    ...changes.map((d) => {
      if (d.type === "added") return `[ADDED] ${d.path}: ${JSON.stringify(d.newValue)}`;
      if (d.type === "removed") return `[REMOVED] ${d.path}: ${JSON.stringify(d.oldValue)}`;
      return `[CHANGED] ${d.path}: ${JSON.stringify(d.oldValue)} → ${JSON.stringify(d.newValue)}`;
    }),
  ];
  return lines.join("\n");
}
