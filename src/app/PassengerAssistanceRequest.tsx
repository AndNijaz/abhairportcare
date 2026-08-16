import { useState } from "react";
import { Info } from "lucide-react";

import { AppHeader } from "@/components/AppHeader/AppHeader";
import { useAppForm } from "@/form/form";
import { RequestSummary } from "@/components/RequestSummary/RequestSummary";
import { SuccessScreen } from "@/components/SuccessScreen/SuccessScreen";
import { requestFormOptions } from "@/form/request.options";
import { validateRequest } from "@/form/request.schemas";
import {
  submitPassengerAssistanceRequest,
  type SubmissionResult,
} from "@/services/passenger-assistance.service";
import { ActiveStep } from "@/stepper/ActiveStep";
import { FormStateBridge } from "@/stepper/FormStateBridge";
import { StepperFooter } from "@/stepper/StepperFooter";
import { StepperProvider } from "@/stepper/StepperProvider";
import { StepProgress } from "@/stepper/StepProgress";
import { useStepper } from "@/stepper/StepperContext";

export function PassengerAssistanceRequest() {
  return (
    <StepperProvider>
      <RequestFormOwner />
    </StepperProvider>
  );
}

function RequestFormOwner() {
  const [submissionResult, setSubmissionResult] =
    useState<SubmissionResult | null>(null);
  const { resetFlow } = useStepper();

  const form = useAppForm({
    ...requestFormOptions,

    validators: {
      onSubmit: ({ value }) => validateRequest(value),
    },

    onSubmit: async ({ value }) => {
      const result = await submitPassengerAssistanceRequest(value);
      setSubmissionResult(result);
    },
  });

  function handleCreateAnother() {
    form.reset();
    resetFlow();
    setSubmissionResult(null);
  }

  if (submissionResult) {
    return (
      <div className="flex min-h-screen flex-col bg-[#f6f8fc] text-[#111b45]">
        <AppHeader />
        <SuccessScreen
          result={submissionResult}
          onCreateAnother={handleCreateAnother}
        />
        <AppFooter />
      </div>
    );
  }

  return (
    <>
      <FormStateBridge form={form} />

      <div className="min-h-screen bg-[#f6f8fc] text-[#111b45]">
        <AppHeader />

        <main className="mx-auto w-full max-w-360 px-5 py-8 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.03)] sm:p-8">
              <StepProgress />

              <div className="mt-9 overflow-hidden rounded-lg border border-slate-200">
                <ActiveStep form={form} />
                <StepperFooter />
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-lg border border-blue-100 bg-blue-50/70 px-4 py-3 text-sm text-blue-700">
                <Info
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                  strokeWidth={1.8}
                />

                <p>
                  All information is secure and will only be used to process
                  your assistance request.
                </p>
              </div>
            </section>

            <RequestSummary />
          </div>
        </main>

        <AppFooter />
      </div>
    </>
  );
}

function AppFooter() {
  return (
    <footer className="pb-8 pt-2 text-center text-xs text-slate-500">
      &copy; 2026 AirPortCare. All rights reserved.
    </footer>
  );
}

export default PassengerAssistanceRequest;
