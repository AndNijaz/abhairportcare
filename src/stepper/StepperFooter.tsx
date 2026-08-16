import { ArrowLeft, ArrowRight } from "lucide-react";

import { useStepper } from "./StepperContext";
import { steps } from "./stepper.config";

export function StepperFooter() {
  const {
    activeStep: activeStepId,
    activeStepIndex,
    blockedStep,
    isFirstStep,
    isLastStep,
    goBack,
    formSnapshot,
  } = useStepper();

  const isSubmitting = formSnapshot.submission.isSubmitting;
  const isContinueDisabled = blockedStep === activeStepId;
  const activeStepConfig = steps[activeStepIndex];

  function handleContinue() {
    if (!activeStepConfig.formId) {
      return;
    }

    const activeStepForm = document.getElementById(activeStepConfig.formId);

    if (!(activeStepForm instanceof HTMLFormElement)) {
      throw new Error(
        `Could not find the active step form: ${activeStepConfig.formId}`,
      );
    }

    activeStepForm.requestSubmit();
  }

  return (
    <div className="flex items-center justify-between border-t border-slate-200 px-8 py-5">
      <button
        type="button"
        onClick={goBack}
        disabled={isFirstStep || isSubmitting}
        className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <button
        type="button"
        onClick={handleContinue}
        disabled={isSubmitting || isContinueDisabled}
        className="flex items-center gap-3 rounded-md bg-[#145dff] px-6 py-3 text-sm font-semibold text-white shadow-[0_3px_8px_rgba(20,93,255,0.22)] transition hover:bg-[#0f52eb] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
      >
        {isSubmitting
          ? "Submitting..."
          : isLastStep
            ? "Submit Request"
            : "Continue"}
        {!isSubmitting && (
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4"
            strokeWidth={1.8}
          />
        )}
      </button>
    </div>
  );
}
