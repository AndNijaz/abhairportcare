import { AppHeader } from "@/components/AppHeader/AppHeader";
import { useAppForm } from "@/components/Form/form";
import { RequestSummary } from "@/components/RequestSummary/RequestSummary";
import { requestFormOptions } from "@/form/request.options";
import { ActiveStep } from "@/stepper/ActiveStep";
import { FormStateBridge } from "@/stepper/FormStateBridge";
import { StepperFooter } from "@/stepper/StepperFooter";
import { StepperProvider } from "@/stepper/StepperProvider";
import { StepProgress } from "@/stepper/StepProgress";
import { Info } from "lucide-react";

function PassengerAssistanceRequest() {
  const form = useAppForm({
    ...requestFormOptions,

    onSubmit: async ({ value }) => {
      console.log("Submitted request:", value);
    },
  });

  return (
    <StepperProvider>
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

        <footer className="pb-8 pt-2 text-center text-xs text-slate-500">
          &c; 2026 AirPortCare. All rights reserved.
        </footer>
      </div>
    </StepperProvider>
  );
}

export default PassengerAssistanceRequest;
