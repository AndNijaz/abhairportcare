import type { ReactNode } from "react";

type ChoiceCardProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  selected?: boolean;
  onClick: () => void;
};

export function ChoiceCard({
  title,
  description,
  icon,
  selected = false,
  onClick,
}: ChoiceCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex w-full items-start gap-4 rounded-lg border p-4 text-left transition",
        selected
          ? "border-blue-500 bg-blue-50/50 ring-1 ring-blue-500/10"
          : "border-slate-200 bg-white hover:border-slate-300",
      ].join(" ")}
    >
      {icon && (
        <div
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            selected
              ? "bg-blue-100 text-blue-600"
              : "bg-slate-100 text-slate-600",
          ].join(" ")}
        >
          {icon}
        </div>
      )}

      <div className="min-w-0">
        <div className="text-sm font-semibold text-[#172044]">{title}</div>

        {description && (
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        )}
      </div>

      <span
        className={[
          "ml-auto mt-1 h-4 w-4 shrink-0 rounded-full border",
          selected
            ? "border-[5px] border-blue-600"
            : "border-slate-300",
        ].join(" ")}
      />
    </button>
  );
}
