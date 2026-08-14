export type StepId =
  | "passengerDetails"
  | "flightDetails"
  | "assistanceNeeds"
  | "review";

export type StepStatus =
  | "active"
  | "completed"
  | "pending";

export type FormUiSnapshot = {
  passenger: {
    name: string;
    email: string;
    phone: string;
    passengerCount: number;
  };

  flight: {
    flightLabel: string;
    routeLabel: string;
  };

  assistance: {
    typeLabel: string;
  };
};