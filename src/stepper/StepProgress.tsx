import { Check } from "lucide-react";

import { useStepper } from "./StepperContext";
import { steps } from "./stepper.config";

export function StepProgress() {
  const { getStepStatus } = useStepper();

  return (
    <div className="grid grid-cols-4">
      {steps.map((step, index) => {
        const status = getStepStatus(step.id);

        const isActive = status === "active";
        const isCompleted = status === "completed";

        return (
          <div key={step.id} className="relative flex flex-col items-center">
            {index !== 0 && (
              <div
                className={[
                  "absolute right-1/2 top-[21px] h-[2px] w-full",
                  isCompleted || isActive ? "bg-[#1463ff]" : "bg-slate-200",
                ].join(" ")}
              />
            )}

            <div
              className={[
                "relative z-10 flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold",
                isActive
                  ? "border-[#1463ff] bg-[#1463ff] text-white"
                  : isCompleted
                    ? "border-[#1463ff] bg-[#1463ff] text-white"
                    : "border-slate-300 bg-white text-slate-600",
              ].join(" ")}
            >
              {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
            </div>

            <span
              className={[
                "mt-3 text-center text-sm",
                isActive ? "font-semibold text-[#0e54dc]" : "text-slate-700",
              ].join(" ")}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
