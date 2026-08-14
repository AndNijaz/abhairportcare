import { withForm } from "@/components/Form/form";
import {
  airlineOptions,
  airportOptions,
  connectionTypeOptions,
} from "@/form/request.catalogs";
import { requestFormOptions } from "@/form/request.options";
import {
  validateFlightDetails,
  validateFlightNumber,
  validateRequiredSelection,
  validateRequiredValue,
} from "@/form/request.schemas";
import { stepFormIds } from "@/stepper/step-form-ids";
import { useStepper } from "@/stepper/StepperContext";

export const FlightDetailsStep = withForm({
  ...requestFormOptions,

  render: function Render({ form }) {
    const { completeStep, goNext } = useStepper();

    return (
      <form.FormGroup
        name="flightDetails"
        validators={{
          onDynamic: ({ value }) => validateFlightDetails(value),
        }}
        onGroupSubmit={() => {
          completeStep("flightDetails");
          goNext();
        }}
      >
        {(formGroup) => (
          <form
            id={stepFormIds.flightDetails}
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();

              formGroup.handleSubmit();
            }}
          >
            <div className="px-8 py-8">
        <div>
          <h1 className="text-2xl font-bold tracking-[-0.02em] text-[#111a45]">
            Flight Details
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Tell us about your flight and journey.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <form.AppField
              name="flightDetails.airlineCode"
              validators={{
                onChange: ({ value }) =>
                  validateRequiredSelection(value, "Please select an airline."),
                onBlur: ({ value }) =>
                  validateRequiredSelection(value, "Please select an airline."),
              }}
            >
              {(field) => (
                <field.SelectField
                  label="Airline"
                  placeholder="Select airline"
                  options={airlineOptions}
                  required
                />
              )}
            </form.AppField>

            <form.AppField
              name="flightDetails.flightNumber"
              validators={{
                onChange: ({ value }) => validateFlightNumber(value),
                onBlur: ({ value }) => validateFlightNumber(value),
              }}
            >
              {(field) => (
                <field.TextField
                  label="Flight Number"
                  placeholder="e.g. LH 1723"
                  required
                />
              )}
            </form.AppField>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <form.AppField
              name="flightDetails.departureAirportCode"
              validators={{
                onChange: ({ value }) =>
                  validateRequiredSelection(
                    value,
                    "Please select a departure airport."
                  ),
                onBlur: ({ value }) =>
                  validateRequiredSelection(
                    value,
                    "Please select a departure airport."
                  ),
              }}
            >
              {(field) => (
                <field.SelectField
                  label="Departure Airport"
                  placeholder="Select departure airport"
                  options={airportOptions}
                  required
                />
              )}
            </form.AppField>

            <form.AppField
              name="flightDetails.arrivalAirportCode"
              validators={{
                onChange: ({ value }) =>
                  validateRequiredSelection(
                    value,
                    "Please select an arrival airport."
                  ),
                onBlur: ({ value }) =>
                  validateRequiredSelection(
                    value,
                    "Please select an arrival airport."
                  ),
              }}
            >
              {(field) => (
                <field.SelectField
                  label="Arrival Airport"
                  placeholder="Select arrival airport"
                  options={airportOptions}
                  required
                />
              )}
            </form.AppField>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <form.AppField
              name="flightDetails.departureDate"
              validators={{
                onChange: ({ value }) =>
                  validateRequiredValue(value, "Departure date is required."),
                onBlur: ({ value }) =>
                  validateRequiredValue(value, "Departure date is required."),
              }}
            >
              {(field) => (
                <field.TextField label="Departure Date" type="date" required />
              )}
            </form.AppField>

            <form.AppField
              name="flightDetails.departureTime"
              validators={{
                onChange: ({ value }) =>
                  validateRequiredValue(value, "Departure time is required."),
                onBlur: ({ value }) =>
                  validateRequiredValue(value, "Departure time is required."),
              }}
            >
              {(field) => (
                <field.TextField label="Departure Time" type="time" required />
              )}
            </form.AppField>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <form.AppField
              name="flightDetails.terminal"
              validators={{
                onChange: ({ value }) =>
                  validateRequiredValue(value, "Terminal is required."),
                onBlur: ({ value }) =>
                  validateRequiredValue(value, "Terminal is required."),
              }}
            >
              {(field) => <field.TextField label="Terminal" required />}
            </form.AppField>

            <form.AppField name="flightDetails.gate">
              {(field) => (
                <field.TextField label="Gate" placeholder="Optional" />
              )}
            </form.AppField>
          </div>

          <form.AppField
            name="flightDetails.connectionType"
            validators={{
              onChange: ({ value }) =>
                validateRequiredSelection(
                  value,
                  "Please select your connection type."
                ),
              onBlur: ({ value }) =>
                validateRequiredSelection(
                  value,
                  "Please select your connection type."
                ),
            }}
          >
            {(field) => (
              <field.RadioGroupField
                label="Connection / Transit"
                options={connectionTypeOptions}
                required
              />
            )}
          </form.AppField>

          <form.AppField name="flightDetails.journeyNotes">
            {(field) => (
              <field.TextareaField
                label="Special notes about your journey"
                placeholder="Add anything that may help us prepare for your journey"
              />
            )}
          </form.AppField>
        </div>
            </div>
          </form>
        )}
      </form.FormGroup>
    );
  },
});
