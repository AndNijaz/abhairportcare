import { formOptions, revalidateLogic } from "@tanstack/react-form";

import type { PassengerAssistanceRequest } from "./request.types";

export const defaultRequestValues: PassengerAssistanceRequest = {
  passengerDetails: {
    fullName: "",
    email: "",
    phone: "",
    passengerCount: 1,
    specialRequirements: [],
  },

  flightDetails: {
    airlineCode: "",
    flightNumber: "",
    departureAirportCode: "",
    arrivalAirportCode: "",
    departureDate: "",
    departureTime: "",
    terminal: "",
    gate: "",
    connectionType: "",
    journeyNotes: "",
  },

  assistanceNeeds: {
    primaryAssistanceType: "",
    mobilityLevel: "",
    airportExitAssistance: "",
    additionalAssistance: [],
    specialNotes: "",
  },
};

export const requestFormOptions = formOptions({
  defaultValues: defaultRequestValues,
  validationLogic: revalidateLogic({
    mode: "submit",
    modeAfterSubmission: "change",
  }),
});



