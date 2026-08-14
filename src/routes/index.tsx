import { createFileRoute } from "@tanstack/react-router";

import PassengerAssistanceRequest from "@/app/PassengerAssistanceRequest";

export const Route = createFileRoute("/")({
  component: PassengerAssistanceRequest,
});
