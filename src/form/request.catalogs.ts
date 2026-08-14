import type {
  AdditionalAssistance,
  AssistanceType,
  AirportExitAssistance,
  MobilityLevel,
} from "./request.types";

export const specialRequirementOptions = [
  {
    value: "wheelchair",
    label: "Wheelchair Assistance",
  },
  {
    value: "visual",
    label: "Visual Assistance",
  },
  {
    value: "hearing",
    label: "Hearing Assistance",
  },
  {
    value: "senior",
    label: "Elderly / Senior Support",
  },
  {
    value: "traveling-with-children",
    label: "Traveling with Child(ren)",
  },
  {
    value: "other",
    label: "Other",
  },
] satisfies Array<{
  value: AssistanceType;
  label: string;
}>;

export const airlineOptions = [
  {
    value: "LH",
    label: "Lufthansa",
  },
  {
    value: "OS",
    label: "Austrian Airlines",
  },
  {
    value: "TK",
    label: "Turkish Airlines",
  },
] as const;

export const airportOptions = [
  {
    value: "SJJ",
    label: "Sarajevo International Airport (SJJ)",
  },
  {
    value: "FRA",
    label: "Frankfurt Airport (FRA)",
  },
  {
    value: "VIE",
    label: "Vienna International Airport (VIE)",
  },
  {
    value: "IST",
    label: "Istanbul Airport (IST)",
  },
] as const;

export const connectionTypeOptions = [
  {
    value: "none",
    label: "No connection",
  },
  {
    value: "one",
    label: "One connection",
  },
  {
    value: "multiple",
    label: "Multiple connections",
  },
] as const;

export const assistanceTypeOptions = [
  {
    value: "wheelchair",
    label: "Wheelchair Assistance",
    description: "Help moving through the airport with a wheelchair",
  },
  {
    value: "visual",
    label: "Visual Assistance",
    description: "Guidance and support for visually impaired passengers",
  },
  {
    value: "hearing",
    label: "Hearing Assistance",
    description: "Support for passengers with hearing impairments",
  },
  {
    value: "senior",
    label: "Elderly / Senior Support",
    description: "Additional help throughout the airport journey",
  },
  {
    value: "traveling-with-children",
    label: "Traveling with Child(ren)",
    description: "Support when traveling with young children",
  },
  {
    value: "other",
    label: "Other",
    description: "Tell us about another type of assistance you need",
  },
] satisfies ReadonlyArray<{
  value: AssistanceType;
  label: string;
  description: string;
}>;

export const mobilityLevelOptions = [
  {
    value: "independent",
    label: "Can walk independently",
  },
  {
    value: "short-distances",
    label: "Can walk short distances",
  },
  {
    value: "cannot-walk",
    label: "Unable to walk",
  },
] satisfies ReadonlyArray<{
  value: MobilityLevel;
  label: string;
}>;

export const airportExitAssistanceOptions = [
  {
    value: "yes",
    label: "Yes, assistance to the airport exit",
  },
  {
    value: "specific-points",
    label: "Only at specific points",
  },
] satisfies ReadonlyArray<{
  value: AirportExitAssistance;
  label: string;
}>;

export const additionalAssistanceOptions = [
  {
    value: "baggage",
    label: "Help with baggage",
  },
  {
    value: "check-in",
    label: "Assistance with check-in",
  },
  {
    value: "priority-security",
    label: "Priority security screening",
  },
  {
    value: "lounge-escort",
    label: "Escort to lounge",
  },
] satisfies ReadonlyArray<{
  value: AdditionalAssistance;
  label: string;
}>;
