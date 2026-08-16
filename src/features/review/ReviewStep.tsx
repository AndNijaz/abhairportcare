import { Pencil } from "lucide-react";

import { withForm } from "@/form/form";
import {
  assistanceTypeOptions,
  airportExitAssistanceOptions,
  mobilityLevelOptions,
} from "@/form/request.catalogs";
import { requestFormOptions } from "@/form/request.options";
import { useStepper } from "@/stepper/StepperContext";
import { stepFormIds } from "@/stepper/step-form-ids";

export const ReviewStep = withForm({
  ...requestFormOptions,

  render: function Render({ form }) {
    const { editStep } = useStepper();

    return (
      <form
        id={stepFormIds.review}
        onSubmit={(event) => {
          event.preventDefault();
          event.stopPropagation();

          void form.handleSubmit();
        }}
      >
        <div className="px-8 py-8">
          <div>
            <h1 className="text-2xl font-bold tracking-[-0.02em] text-[#111a45]">
              Review & Submit
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Review your information before submitting your assistance request.
            </p>
          </div>

          <form.Subscribe selector={(state) => state.values}>
            {(values) => (
              <div className="mt-8 space-y-6">
                <ReviewSection
                  title="Passenger Details"
                  onEdit={() => editStep("passengerDetails")}
                >
                  <ReviewGrid>
                    <ReviewItem
                      label="Full Name"
                      value={values.passengerDetails.fullName}
                    />

                    <ReviewItem
                      label="Email Address"
                      value={values.passengerDetails.email}
                    />

                    <ReviewItem
                      label="Phone Number"
                      value={values.passengerDetails.phone}
                    />

                    <ReviewItem
                      label="Passengers"
                      value={String(values.passengerDetails.passengerCount)}
                    />
                  </ReviewGrid>
                </ReviewSection>

                <ReviewSection
                  title="Flight Details"
                  onEdit={() => editStep("flightDetails")}
                >
                  <ReviewGrid>
                    <ReviewItem
                      label="Airline"
                      value={values.flightDetails.airlineCode}
                    />

                    <ReviewItem
                      label="Flight Number"
                      value={values.flightDetails.flightNumber}
                    />

                    <ReviewItem
                      label="Route"
                      value={`${values.flightDetails.departureAirportCode} → ${values.flightDetails.arrivalAirportCode}`}
                    />

                    <ReviewItem
                      label="Departure"
                      value={`${values.flightDetails.departureDate} ${values.flightDetails.departureTime}`}
                    />

                    <ReviewItem
                      label="Terminal"
                      value={values.flightDetails.terminal}
                    />

                    <ReviewItem
                      label="Gate"
                      value={values.flightDetails.gate || "Not provided"}
                    />
                  </ReviewGrid>
                </ReviewSection>

                <ReviewSection
                  title="Assistance Needs"
                  onEdit={() => editStep("assistanceNeeds")}
                >
                  <ReviewGrid>
                    <ReviewItem
                      label="Type of Assistance"
                      value={getLabel(
                        assistanceTypeOptions,
                        values.assistanceNeeds.primaryAssistanceType
                      )}
                    />

                    {values.assistanceNeeds.primaryAssistanceType ===
                      "wheelchair" && (
                      <ReviewItem
                        label="Mobility Level"
                        value={getLabel(
                          mobilityLevelOptions,
                          values.assistanceNeeds.mobilityLevel
                        )}
                      />
                    )}

                    <ReviewItem
                      label="Airport Exit Assistance"
                      value={getLabel(
                        airportExitAssistanceOptions,
                        values.assistanceNeeds.airportExitAssistance
                      )}
                    />

                    <ReviewItem
                      label="Special Notes"
                      value={values.assistanceNeeds.specialNotes || "None"}
                    />
                  </ReviewGrid>
                </ReviewSection>
              </div>
            )}
          </form.Subscribe>
        </div>
      </form>
    );
  },
});

function ReviewSection({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <h2 className="font-semibold text-[#172044]">{title}</h2>

        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-2 text-sm font-semibold text-[#145dff]"
        >
          <Pencil className="h-4 w-4" />
          Edit
        </button>
      </div>

      <div className="p-5">{children}</div>
    </section>
  );
}

function ReviewGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">{children}</div>;
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-medium text-slate-500">{label}</div>

      <div className="mt-1 text-sm font-medium text-[#172044]">
        {value || "Not provided"}
      </div>
    </div>
  );
}

function getLabel<TValue extends string>(
  options: ReadonlyArray<{
    value: TValue;
    label: string;
  }>,
  value: TValue | ""
) {
  if (!value) {
    return "Not provided";
  }

  return options.find((option) => option.value === value)?.label ?? value;
}
