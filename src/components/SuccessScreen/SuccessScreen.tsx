import { CircleCheck, Download, Plus } from "lucide-react";

import type { SubmissionResult } from "@/services/passenger-assistance.service";

type SuccessScreenProps = {
  result: SubmissionResult;
  onCreateAnother: () => void;
};

export function SuccessScreen({
  result,
  onCreateAnother,
}: SuccessScreenProps) {
  const { passengerDetails, flightDetails } = result.request;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 items-center px-5 py-12 lg:px-8">
      <div className="w-full rounded-xl border border-slate-200 bg-white p-7 text-center shadow-[0_1px_3px_rgba(15,23,42,0.03)] sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CircleCheck
            aria-hidden="true"
            className="h-8 w-8"
            strokeWidth={1.8}
          />
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-[-0.02em] text-[#111a45]">
          Request submitted successfully
        </h1>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
          Your passenger assistance request has been received. Keep the
          reference number below for your records.
        </p>

        <div className="mx-auto mt-7 max-w-md rounded-lg border border-blue-100 bg-blue-50/70 px-5 py-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            Request reference
          </div>
          <div className="mt-1 text-xl font-bold tracking-wide text-[#145dff]">
            {result.reference}
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl gap-x-8 gap-y-5 border-y border-slate-200 py-6 text-left sm:grid-cols-2">
          <SummaryItem label="Passenger" value={passengerDetails.fullName} />
          <SummaryItem label="Email" value={passengerDetails.email} />
          <SummaryItem label="Phone" value={passengerDetails.phone} />
          <SummaryItem
            label="Submitted"
            value={formatSubmittedAt(result.submittedAt)}
          />
          <SummaryItem
            label="Flight"
            value={[flightDetails.airlineCode, flightDetails.flightNumber]
              .filter(Boolean)
              .join(" ")}
          />
          <SummaryItem
            label="Route"
            value={
              flightDetails.departureAirportCode &&
              flightDetails.arrivalAirportCode
                ? `${flightDetails.departureAirportCode} → ${flightDetails.arrivalAirportCode}`
                : ""
            }
          />
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            onClick={() => downloadSummary(result)}
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Download summary
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md bg-[#145dff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f52e8]"
            onClick={onCreateAnother}
          >
            <Plus aria-hidden="true" className="h-4 w-4" />
            Create another request
          </button>
        </div>
      </div>
    </main>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-medium text-[#172044]">
        {value || "Not provided"}
      </div>
    </div>
  );
}

function formatSubmittedAt(submittedAt: string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(submittedAt));
}

function downloadSummary(result: SubmissionResult) {
  const summary = [
    "AirPortCare Passenger Assistance Request",
    "",
    `Reference: ${result.reference}`,
    `Submitted: ${formatSubmittedAt(result.submittedAt)}`,
    `Passenger: ${result.request.passengerDetails.fullName}`,
    `Email: ${result.request.passengerDetails.email}`,
    `Phone: ${result.request.passengerDetails.phone}`,
    `Flight: ${result.request.flightDetails.airlineCode} ${result.request.flightDetails.flightNumber}`,
    `Route: ${result.request.flightDetails.departureAirportCode} → ${result.request.flightDetails.arrivalAirportCode}`,
  ].join("\n");

  const blob = new Blob([summary], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = `${result.reference}.txt`;
  anchor.click();

  URL.revokeObjectURL(url);
}
