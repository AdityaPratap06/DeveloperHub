"use client";

import { useMemo, useState } from "react";
import cronstrue from "cronstrue";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CopyButton } from "@/components/shared/copy-button";

const PRESETS = [
  { label: "Every minute", cron: "* * * * *" },
  { label: "Every hour", cron: "0 * * * *" },
  { label: "Every day at midnight", cron: "0 0 * * *" },
  { label: "Every Monday at 9am", cron: "0 9 * * 1" },
  { label: "First of every month", cron: "0 0 1 * *" },
];

export function CronGeneratorTool() {
  const [minute, setMinute] = useState("*");
  const [hour, setHour] = useState("*");
  const [dayOfMonth, setDayOfMonth] = useState("*");
  const [month, setMonth] = useState("*");
  const [dayOfWeek, setDayOfWeek] = useState("*");
  const [customCron, setCustomCron] = useState("");

  const expression = customCron || `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;

  const explanation = useMemo(() => {
    try {
      return cronstrue.toString(expression);
    } catch {
      return "Invalid cron expression";
    }
  }, [expression]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Quick Presets</Label>
        <Select onValueChange={(v) => setCustomCron(v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a preset..." />
          </SelectTrigger>
          <SelectContent>
            {PRESETS.map((p) => (
              <SelectItem key={p.cron} value={p.cron}>
                {p.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-5">
        {[
          { label: "Minute", value: minute, set: setMinute, placeholder: "0-59" },
          { label: "Hour", value: hour, set: setHour, placeholder: "0-23" },
          { label: "Day (Month)", value: dayOfMonth, set: setDayOfMonth, placeholder: "1-31" },
          { label: "Month", value: month, set: setMonth, placeholder: "1-12" },
          { label: "Day (Week)", value: dayOfWeek, set: setDayOfWeek, placeholder: "0-6" },
        ].map((field) => (
          <div key={field.label} className="space-y-2">
            <Label>{field.label}</Label>
            <Input
              value={field.value}
              onChange={(e) => {
                field.set(e.target.value);
                setCustomCron("");
              }}
              placeholder={field.placeholder}
              className="font-mono"
            />
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-muted/30 p-6 space-y-3">
        <div className="flex items-center justify-between">
          <Label>Cron Expression</Label>
          <CopyButton text={expression} />
        </div>
        <p className="font-mono text-2xl font-bold text-center">{expression}</p>
        <p className="text-center text-muted-foreground">{explanation}</p>
      </div>

      <div className="space-y-2">
        <Label>Or enter custom expression</Label>
        <Input
          value={customCron}
          onChange={(e) => setCustomCron(e.target.value)}
          placeholder="* * * * *"
          className="font-mono"
        />
      </div>
    </div>
  );
}
