import { useEffect } from "react";
import { useSelector } from "@tanstack/react-form";

import { withForm } from "@/form/form";
import { assistanceTypeOptions } from "@/form/request.catalogs";
import { requestFormOptions } from "@/form/request.options";

import { useStepper } from "./StepperContext";

export const FormStateBridge = withForm({
  ...requestFormOptions,

  render: function Render({ form }) {
    const { publishFormSnapshot } = useStepper();

    const passengerName = useSelector(
      form.store,
      (state) => state.values.passengerDetails.fullName
    );

    const passengerEmail = useSelector(
      form.store,
      (state) => state.values.passengerDetails.email
    );

    const passengerPhone = useSelector(
      form.store,
      (state) => state.values.passengerDetails.phone
    );

    const passengerCount = useSelector(
      form.store,
      (state) => state.values.passengerDetails.passengerCount
    );

    const airlineCode = useSelector(
      form.store,
      (state) => state.values.flightDetails.airlineCode
    );

    const flightNumber = useSelector(
      form.store,
      (state) => state.values.flightDetails.flightNumber
    );

    const departureAirportCode = useSelector(
      form.store,
      (state) => state.values.flightDetails.departureAirportCode
    );

    const arrivalAirportCode = useSelector(
      form.store,
      (state) => state.values.flightDetails.arrivalAirportCode
    );

    const assistanceType = useSelector(
      form.store,
      (state) => state.values.assistanceNeeds.primaryAssistanceType
    );

    const isSubmitting = useSelector(
      form.store,
      (state) => state.isSubmitting
    );

    useEffect(() => {
      const assistanceLabel =
        assistanceTypeOptions.find((option) => option.value === assistanceType)
          ?.label ?? "";

      const flightLabel = [airlineCode, flightNumber].filter(Boolean).join(" ");

      const routeLabel =
        departureAirportCode && arrivalAirportCode
          ? `${departureAirportCode} → ${arrivalAirportCode}`
          : "";

      publishFormSnapshot({
        passenger: {
          name: passengerName,
          email: passengerEmail,
          phone: passengerPhone,
          passengerCount,
        },

        flight: {
          flightLabel,
          routeLabel,
        },

        assistance: {
          typeLabel: assistanceLabel,
        },

        submission: {
          isSubmitting,
        },
      });
    }, [
      passengerName,
      passengerEmail,
      passengerPhone,
      passengerCount,
      airlineCode,
      flightNumber,
      departureAirportCode,
      arrivalAirportCode,
      assistanceType,
      isSubmitting,
      publishFormSnapshot,
    ]);

    return null;
  },
});
