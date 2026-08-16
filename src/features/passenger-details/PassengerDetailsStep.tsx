import { withForm } from "@/form/form";
import { requestFormOptions } from "@/form/request.options";
import { specialRequirementOptions } from "@/form/request.catalogs";
import {
  validateEmail,
  validatePassengerCount,
  validatePassengerDetails,
  validatePassengerName,
  validatePhone,
} from "@/form/request.schemas";
import { stepFormIds } from "@/stepper/step-form-ids";
import { useStepper } from "@/stepper/StepperContext";

const passengerCountOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
] as const;

export const PassengerDetailsStep = withForm({
  ...requestFormOptions,

  render: function Render({ form }) {
    const { completeStep, goNext } = useStepper();

    return (
      <form.FormGroup
        name="passengerDetails"
        validators={{
          onDynamic: ({ value }) => validatePassengerDetails(value),
        }}
        onGroupSubmit={() => {
          completeStep("passengerDetails");
          goNext();
        }}
      >
        {(formGroup) => (
          <form
            id={stepFormIds.passengerDetails}
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();

              formGroup.handleSubmit();
            }}
          >
            <div className="px-8 py-8">
              <div>
                <h1 className="text-2xl font-bold tracking-[-0.02em] text-[#111a45]">
                  Passenger Details
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Tell us about the passenger who needs assistance.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <form.AppField
                  name="passengerDetails.fullName"
                  validators={{
                    onChange: ({ value }) => validatePassengerName(value),
                    onBlur: ({ value }) => validatePassengerName(value),
                  }}
                >
                  {(field) => <field.TextField label="Full Name" required />}
                </form.AppField>

                <form.AppField
                  name="passengerDetails.email"
                  validators={{
                    onChange: ({ value }) => validateEmail(value),
                    onBlur: ({ value }) => validateEmail(value),
                  }}
                >
                  {(field) => (
                    <field.TextField
                      label="Email Address"
                      type="email"
                      required
                    />
                  )}
                </form.AppField>

                <div className="grid gap-6 md:grid-cols-2">
                  <form.AppField
                    name="passengerDetails.phone"
                    validators={{
                      onChange: ({ value }) => validatePhone(value),
                      onBlur: ({ value }) => validatePhone(value),
                    }}
                  >
                    {(field) => (
                      <field.PhoneField label="Phone Number" required />
                    )}
                  </form.AppField>

                  <form.AppField
                    name="passengerDetails.passengerCount"
                    validators={{
                      onChange: ({ value }) => validatePassengerCount(value),
                      onBlur: ({ value }) => validatePassengerCount(value),
                    }}
                  >
                    {(field) => (
                      <field.NumberSelectField
                        label="Number of Passengers"
                        options={passengerCountOptions}
                        required
                      />
                    )}
                  </form.AppField>
                </div>

                <form.AppField name="passengerDetails.specialRequirements">
                  {(field) => (
                    <field.CheckboxGroupField
                      label="Special Requirements"
                      optional
                      options={specialRequirementOptions}
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
