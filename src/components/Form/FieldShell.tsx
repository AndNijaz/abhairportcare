import type { ReactNode } from "react";

export type FieldStatus = "default" | "success" | "error";

type FieldShellProps = {
  children: ReactNode;
  label: string;
  htmlFor?: string;
  required?: boolean;
  message?: string;
  status?: FieldStatus;
};

export function FieldShell({
  children,
  label,
  htmlFor,
  required = false,
  message,
  status = "default",
}: FieldShellProps) {
  return (
    <div>
      <label
        className="mb-2 block text-sm font-semibold text-[#172044]"
        htmlFor={htmlFor}
      >
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {children}

      {message && (
        <p
          className={[
            "mt-1.5 text-xs",
            status === "error"
              ? "text-red-500"
              : status === "success"
                ? "text-emerald-600"
                : "text-slate-500",
          ].join(" ")}
        >
          {message}
        </p>
      )}
    </div>
  );
}
