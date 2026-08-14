import type { FieldStatus } from "./FieldShell";

export const controlSharedStyles =
  "w-full rounded-md border bg-white text-sm text-slate-800 outline-none transition-colors focus:ring-2 focus:ring-blue-500/10 focus-within:ring-2 focus-within:ring-blue-500/10";

export const controlBaseStyles = `h-12 ${controlSharedStyles}`;

export function getControlStatusStyles(status: FieldStatus) {
  switch (status) {
    case "success":
      return "border-emerald-400 focus:border-emerald-500 focus-within:border-emerald-500";

    case "error":
      return "border-red-400 focus:border-red-500 focus-within:border-red-500";

    default:
      return "border-slate-300 focus:border-blue-500 focus-within:border-blue-500";
  }
}
