export type AssistanceType =
  | "wheelchair"
  | "visual"
  | "hearing"
  | "senior"
  | "traveling-with-children"
  | "other";

export type ConnectionType =
  | "none"
  | "one"
  | "multiple";

export type MobilityLevel =
  | "independent"
  | "short-distances"
  | "cannot-walk";

export type AirportExitAssistance =
  | "yes"
  | "specific-points";

export type AdditionalAssistance =
  | "baggage"
  | "check-in"
  | "priority-security"
  | "lounge-escort";

export type PassengerAssistanceRequest = {
  passengerDetails: {
    fullName: string;
    email: string;
    phone: string;
    passengerCount: number;
    specialRequirements: AssistanceType[];
  };

  flightDetails: {
    airlineCode: string;
    flightNumber: string;
    departureAirportCode: string;
    arrivalAirportCode: string;
    departureDate: string;
    departureTime: string;
    terminal: string;
    gate: string;
    connectionType: ConnectionType | "";
    journeyNotes: string;
  };

  assistanceNeeds: {
    primaryAssistanceType: AssistanceType | "";
    mobilityLevel: MobilityLevel | "";
    airportExitAssistance: AirportExitAssistance | "";
    additionalAssistance: AdditionalAssistance[];
    specialNotes: string;
  };
};