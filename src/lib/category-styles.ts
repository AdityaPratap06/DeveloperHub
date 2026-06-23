import type { ToolCategory } from "./tools";

export const CATEGORY_STYLES: Record<
  ToolCategory,
  { icon: string; badge: string; gradient: string }
> = {
  data: {
    icon: "bg-blue-500/10 text-blue-600 ring-blue-500/20 dark:text-blue-400",
    badge: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300",
    gradient: "from-blue-500/10 to-cyan-500/5",
  },
  encoding: {
    icon: "bg-cyan-500/10 text-cyan-600 ring-cyan-500/20 dark:text-cyan-400",
    badge: "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-300",
    gradient: "from-cyan-500/10 to-teal-500/5",
  },
  security: {
    icon: "bg-amber-500/10 text-amber-600 ring-amber-500/20 dark:text-amber-400",
    badge: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300",
    gradient: "from-amber-500/10 to-orange-500/5",
  },
  text: {
    icon: "bg-violet-500/10 text-violet-600 ring-violet-500/20 dark:text-violet-400",
    badge: "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300",
    gradient: "from-violet-500/10 to-purple-500/5",
  },
  formatters: {
    icon: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20 dark:text-emerald-400",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300",
    gradient: "from-emerald-500/10 to-green-500/5",
  },
  generators: {
    icon: "bg-rose-500/10 text-rose-600 ring-rose-500/20 dark:text-rose-400",
    badge: "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950/50 dark:text-rose-300",
    gradient: "from-rose-500/10 to-pink-500/5",
  },
  utilities: {
    icon: "bg-indigo-500/10 text-indigo-600 ring-indigo-500/20 dark:text-indigo-400",
    badge: "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300",
    gradient: "from-indigo-500/10 to-blue-500/5",
  },
  seo: {
    icon: "bg-orange-500/10 text-orange-600 ring-orange-500/20 dark:text-orange-400",
    badge: "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800 dark:bg-orange-950/50 dark:text-orange-300",
    gradient: "from-orange-500/10 to-amber-500/5",
  },
  web: {
    icon: "bg-sky-500/10 text-sky-600 ring-sky-500/20 dark:text-sky-400",
    badge: "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-300",
    gradient: "from-sky-500/10 to-blue-500/5",
  },
};
