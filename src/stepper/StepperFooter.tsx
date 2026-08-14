import { ArrowLeft, ArrowRight } from "lucide-react";

import { useStepper } from "./StepperContext";
import { steps } from "./stepper.config";

export function StepperFooter() {
  const { activeStepIndex, isFirstStep, isLastStep, goBack } = useStepper();

  const activeStep = steps[activeStepIndex];

  return (
    <div className="flex items-center justify-between border-t border-slate-200 px-8 py-5">
      <button
        type="button"
        onClick={goBack}
        disabled={isFirstStep}
        className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      {!isLastStep && (
        <button
          type="submit"
          form={activeStep.formId ?? undefined}
          className="flex items-center gap-3 rounded-md bg-[#145dff] px-6 py-3 text-sm font-semibold text-white"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      )}

      {isLastStep && (
        <button
          type="button"
          disabled
          className="rounded-md bg-[#145dff] px-6 py-3 text-sm font-semibold text-white opacity-50"
        >
          Submit Request
        </button>
      )}
    </div>
  );
}
