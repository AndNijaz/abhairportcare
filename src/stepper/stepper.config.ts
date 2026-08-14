import type { StepId } from "./stepper.types";
import { stepFormIds } from "./step-form-ids";

export type StepDefinition = {
  id: StepId;
  label: string;
  formId: string | null;
};

export const steps: readonly StepDefinition[] = [
  {
    id: "passengerDetails",
    label: "Passenger Details",
    formId: stepFormIds.passengerDetails,
  },
  {
    id: "flightDetails",
    label: "Flight Details",
    formId: stepFormIds.flightDetails,
  },
  {
    id: "assistanceNeeds",
    label: "Assistance Needs",
    formId: stepFormIds.assistanceNeeds,
  },
  {
    id: "review",
    label: "Review & Submit",
    formId: null,
  },
];