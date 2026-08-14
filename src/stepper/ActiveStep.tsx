import { FlightDetailsStep } from "@/features/flight-details/FlightDetailsStep";
import { PassengerDetailsStep } from "@/features/passenger-details/PassengerDetailsStep";
import { AssistanceNeedsStep } from "@/features/assitance-needs/AssistanceNeedsStep";
import { requestFormOptions } from "@/form/request.options";
import { withForm } from "@/components/Form/form";

import { useStepper } from "./StepperContext";

export const ActiveStep = withForm({
  ...requestFormOptions,

  render: function Render({ form }) {
    const { activeStep } = useStepper();

    switch (activeStep) {
      case "passengerDetails":
        return <PassengerDetailsStep form={form} />;

      case "flightDetails":
        return <FlightDetailsStep form={form} />;

      case "assistanceNeeds":
        return <AssistanceNeedsStep form={form} />;

      case "review":
        return (
          <div className="px-8 py-8">
            <h1 className="text-2xl font-bold text-[#111a45]">
              Review & Submit
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Review your assistance request before submitting.
            </p>
          </div>
        );
    }
  },
});
