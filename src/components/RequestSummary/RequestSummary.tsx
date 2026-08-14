import { FileText, Headset, TriangleAlert } from "lucide-react";
import { useStepper } from "@/stepper/StepperContext";
import { steps } from "@/stepper/stepper.config";

export function RequestSummary() {
  const { formSnapshot, progress, getStepStatus } = useStepper();

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.03)] lg:sticky lg:top-8">
      <div className="flex items-center gap-3">
        <FileText
          aria-hidden="true"
          className="h-5 w-5 text-[#1463ff]"
          strokeWidth={1.8}
        />

        <h2 className="text-lg font-bold text-[#111a45]">Request Summary</h2>
      </div>

      <section className="mt-8">
        <div className="flex items-center justify-between text-sm font-semibold text-[#172044]">
          <span>Progress</span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-[#1463ff] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="text-sm font-medium text-slate-600">
            {Math.round(progress)}%
          </span>
        </div>
      </section>

      <section className="mt-8 space-y-5">
        <SummaryItem
          label="Passenger"
          value={formSnapshot.passenger.name || "Not provided"}
        />

        <SummaryItem
          label="Email"
          value={formSnapshot.passenger.email || "Not provided"}
        />

        <SummaryItem
          label="Phone"
          value={formSnapshot.passenger.phone || "Not provided"}
        />

        <SummaryItem
          label="Passengers"
          value={String(formSnapshot.passenger.passengerCount)}
        />

        {formSnapshot.flight.flightLabel && (
          <SummaryItem label="Flight" value={formSnapshot.flight.flightLabel} />
        )}

        {formSnapshot.flight.routeLabel && (
          <SummaryItem label="Route" value={formSnapshot.flight.routeLabel} />
        )}

        {formSnapshot.assistance.typeLabel && (
          <SummaryItem
            label="Assistance"
            value={formSnapshot.assistance.typeLabel}
          />
        )}
      </section>

      <Divider />

      <section>
        <h3 className="text-sm font-semibold text-[#172044]">Step Status</h3>

        <div className="mt-5">
          {steps.map((step, index) => {
            const status = getStepStatus(step.id);
            const statusLabel =
              status === "completed"
                ? "Completed"
                : status === "active"
                  ? "In progress"
                  : "Pending";

            return (
              <div
                className="relative flex gap-4 pb-5 last:pb-0"
                key={step.id}
              >
                {index !== steps.length - 1 && (
                  <div className="absolute left-3.75 top-8 h-[calc(100%-20px)] w-px bg-slate-200" />
                )}

                <div
                  className={[
                    "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                    status === "active"
                      ? "bg-[#76a7ff] text-white"
                      : status === "completed"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-500",
                  ].join(" ")}
                >
                  {index + 1}
                </div>

                <div className="-mt-0.5">
                  <div className="text-sm font-medium text-[#172044]">
                    {step.label}
                  </div>

                  <div
                    className={[
                      "mt-1 text-xs",
                      status === "completed"
                        ? "text-emerald-600"
                        : "text-slate-500",
                    ].join(" ")}
                  >
                    {statusLabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Divider />

      <section>
        <div className="flex items-center gap-3">
          <TriangleAlert
            aria-hidden="true"
            className="h-5 w-5 text-red-500"
            strokeWidth={1.8}
          />

          <h3 className="text-sm font-semibold text-[#172044]">
            Missing Information
          </h3>
        </div>

        <p className="ml-9 mt-2 text-sm text-emerald-600">
          No missing information
        </p>
      </section>

      <Divider />

      <section>
        <div className="flex items-center gap-3">
          <Headset
            aria-hidden="true"
            className="h-5 w-5 text-[#172044]"
            strokeWidth={1.8}
          />

          <h3 className="text-sm font-semibold text-[#172044]">Need Help?</h3>
        </div>

        <p className="ml-9 mt-2 max-w-[220px] text-sm leading-5 text-slate-600">
          If you need assistance, contact our support team.
        </p>

        <button
          className="ml-9 mt-4 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          type="button"
        >
          Contact Support
        </button>
      </section>
    </aside>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-sm font-semibold text-[#172044]">{label}</div>
      <div className="mt-1 break-words text-sm text-[#172044]">{value}</div>
    </div>
  );
}

function Divider() {
  return <div className="my-7 border-t border-slate-200" />;
}
