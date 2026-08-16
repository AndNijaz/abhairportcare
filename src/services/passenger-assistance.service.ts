import type { PassengerAssistanceRequest } from "@/form/request.types";

export type SubmissionResult = {
  reference: string;
  submittedAt: string;
  request: PassengerAssistanceRequest;
};

export async function submitPassengerAssistanceRequest(
  request: PassengerAssistanceRequest,
): Promise<SubmissionResult> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return {
    reference: createReference(),
    submittedAt: new Date().toISOString(),
    request: structuredClone(request),
  };
}

function createReference() {
  return `APR-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}
