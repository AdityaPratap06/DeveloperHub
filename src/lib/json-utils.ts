export interface JsonParseError {
  message: string;
  line?: number;
  column?: number;
}

export function parseJsonWithError(input: string): { data?: unknown; error?: JsonParseError } {
  if (!input.trim()) {
    return { error: { message: "Input is empty" } };
  }

  try {
    const data = JSON.parse(input);
    return { data };
  } catch (e) {
    const err = e as SyntaxError;
    const match = err.message.match(/position (\d+)/);
    let line: number | undefined;
    let column: number | undefined;

    if (match) {
      const position = parseInt(match[1], 10);
      const lines = input.substring(0, position).split("\n");
      line = lines.length;
      column = lines[lines.length - 1].length + 1;
    }

    return {
      error: {
        message: err.message,
        line,
        column,
      },
    };
  }
}

export function formatJson(input: string, indent = 2): { output: string; error?: JsonParseError } {
  const result = parseJsonWithError(input);
  if (result.error) return { output: "", error: result.error };
  return { output: JSON.stringify(result.data, null, indent) };
}

export function minifyJson(input: string): { output: string; error?: JsonParseError } {
  const result = parseJsonWithError(input);
  if (result.error) return { output: "", error: result.error };
  return { output: JSON.stringify(result.data) };
}
