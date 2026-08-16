import { FlightDetailsStep } from "@/features/flight-details/FlightDetailsStep";
import { PassengerDetailsStep } from "@/features/passenger-details/PassengerDetailsStep";
import { AssistanceNeedsStep } from "@/features/assistance-needs/AssistanceNeedsStep";
import { requestFormOptions } from "@/form/request.options";
import { withForm } from "@/form/form";

import { useStepper } from "./StepperContext";
import { ReviewStep } from "@/features/review/ReviewStep";

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
        return <ReviewStep form={form} />;
    }
  },
});
