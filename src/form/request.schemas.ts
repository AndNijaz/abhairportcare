import type { PassengerAssistanceRequest } from "./request.types";

export function validatePassengerName(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Full name is required.";
  }

  if (trimmedValue.length < 2) {
    return "Please enter a valid full name.";
  }

  return undefined;
}

export function validateEmail(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "Email address is required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(trimmedValue)) {
    return "Please enter a valid email address.";
  }

  return undefined;
}

export function validatePhone(value: string) {
  if (!value.trim()) {
    return "Phone number is required.";
  }

  return undefined;
}

export function validatePassengerCount(value: number) {
  if (value < 1) {
    return "Please select the number of passengers.";
  }

  return undefined;
}

export function validateRequiredSelection(
  value: string,
  message: string,
) {
  if (!value) {
    return message;
  }

  return undefined;
}

export function validateFlightNumber(value: string) {
  if (!value.trim()) {
    return "Flight number is required.";
  }

  return undefined;
}

export function validateRequiredValue(
  value: string,
  message: string,
) {
  if (!value.trim()) {
    return message;
  }

  return undefined;
}

type PassengerDetails =
  PassengerAssistanceRequest["passengerDetails"];

type FlightDetails =
  PassengerAssistanceRequest["flightDetails"];

type AssistanceNeeds =
  PassengerAssistanceRequest["assistanceNeeds"];

function hasErrors(
  fields: Record<string, string | undefined>,
) {
  return Object.values(fields).some(Boolean);
}

export function validatePassengerDetails(
  value: PassengerDetails,
) {
  const fields = {
    fullName: validatePassengerName(value.fullName),
    email: validateEmail(value.email),
    phone: validatePhone(value.phone),
    passengerCount: validatePassengerCount(
      value.passengerCount,
    ),
  };

  return hasErrors(fields)
    ? { fields }
    : undefined;
}

export function validateFlightDetails(
  value: FlightDetails,
) {
  const fields = {
    airlineCode: validateRequiredSelection(
      value.airlineCode,
      "Please select an airline.",
    ),

    flightNumber: validateFlightNumber(
      value.flightNumber,
    ),

    departureAirportCode: validateRequiredSelection(
      value.departureAirportCode,
      "Please select a departure airport.",
    ),

    arrivalAirportCode: validateRequiredSelection(
      value.arrivalAirportCode,
      "Please select an arrival airport.",
    ),

    departureDate: validateRequiredValue(
      value.departureDate,
      "Departure date is required.",
    ),

    departureTime: validateRequiredValue(
      value.departureTime,
      "Departure time is required.",
    ),

    terminal: validateRequiredValue(
      value.terminal,
      "Terminal is required.",
    ),

    connectionType: validateRequiredSelection(
      value.connectionType,
      "Please select your connection type.",
    ),
  };

  return hasErrors(fields)
    ? { fields }
    : undefined;
}

export function validateAssistanceNeeds(
  value: AssistanceNeeds,
) {
  const fields = {
    primaryAssistanceType: validateRequiredSelection(
      value.primaryAssistanceType,
      "Please select an assistance type.",
    ),

    mobilityLevel:
      value.primaryAssistanceType === "wheelchair" &&
      !value.mobilityLevel
        ? "Please select the required mobility level."
        : undefined,

    airportExitAssistance: validateRequiredSelection(
      value.airportExitAssistance,
      "Please select an option.",
    ),
  };

  return hasErrors(fields)
    ? { fields }
    : undefined;
}