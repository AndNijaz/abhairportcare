import {
  Accessibility,
  Baby,
  Ear,
  Eye,
  HandHelping,
  MoreHorizontal,
} from "lucide-react";

import { withForm } from "@/components/Form/form";
import {
  additionalAssistanceOptions,
  airportExitAssistanceOptions,
  assistanceTypeOptions,
  mobilityLevelOptions,
} from "@/form/request.catalogs";
import { requestFormOptions } from "@/form/request.options";
import {
  validateAssistanceNeeds,
  validateRequiredSelection,
} from "@/form/request.schemas";
import { stepFormIds } from "@/stepper/step-form-ids";
import { useStepper } from "@/stepper/StepperContext";

const assistanceIcons = {
  wheelchair: <Accessibility className="h-5 w-5" />,
  visual: <Eye className="h-5 w-5" />,
  hearing: <Ear className="h-5 w-5" />,
  senior: <HandHelping className="h-5 w-5" />,
  "traveling-with-children": <Baby className="h-5 w-5" />,
  other: <MoreHorizontal className="h-5 w-5" />,
};

const assistanceOptionsWithIcons = assistanceTypeOptions.map((option) => ({
  ...option,
  icon: assistanceIcons[option.value],
}));

export const AssistanceNeedsStep = withForm({
  ...requestFormOptions,

  render: function Render({ form }) {
    const { completeStep, goNext } = useStepper();

    return (
      <form.FormGroup
        name="assistanceNeeds"
        validators={{
          onDynamic: ({ value }) => validateAssistanceNeeds(value),
        }}
        onGroupSubmit={() => {
          completeStep("assistanceNeeds");
          goNext();
        }}
      >
        {(formGroup) => (
          <form
            id={stepFormIds.assistanceNeeds}
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();

              formGroup.handleSubmit();
            }}
          >
            <div className="px-8 py-8">
        <div>
          <h1 className="text-2xl font-bold tracking-[-0.02em] text-[#111a45]">
            Assistance Needs
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Tell us what kind of assistance would make your journey easier.
          </p>
        </div>

        <div className="mt-8 space-y-7">
          <form.AppField
            name="assistanceNeeds.primaryAssistanceType"
            validators={{
              onChange: ({ value }) =>
                validateRequiredSelection(
                  value,
                  "Please select an assistance type."
                ),

              onBlur: ({ value }) =>
                validateRequiredSelection(
                  value,
                  "Please select an assistance type."
                ),
            }}
            listeners={{
              onChange: ({ value }) => {
                if (value !== "wheelchair") {
                  form.setFieldValue("assistanceNeeds.mobilityLevel", "");
                }
              },
            }}
          >
            {(field) => (
              <field.ChoiceCardGroupField
                label="Type of Assistance"
                options={assistanceOptionsWithIcons}
                required
              />
            )}
          </form.AppField>

          <form.Subscribe
            selector={(state) =>
              state.values.assistanceNeeds.primaryAssistanceType
            }
          >
            {(primaryAssistanceType) =>
              primaryAssistanceType === "wheelchair" ? (
                <form.AppField name="assistanceNeeds.mobilityLevel">
                  {(field) => (
                    <field.SelectField
                      label="Mobility Level"
                      placeholder="Select mobility level"
                      options={mobilityLevelOptions}
                      required
                    />
                  )}
                </form.AppField>
              ) : null
            }
          </form.Subscribe>

          <form.AppField
            name="assistanceNeeds.airportExitAssistance"
            validators={{
              onChange: ({ value }) =>
                validateRequiredSelection(value, "Please select an option."),

              onBlur: ({ value }) =>
                validateRequiredSelection(value, "Please select an option."),
            }}
          >
            {(field) => (
              <field.RadioGroupField
                label="Assistance from aircraft to airport exit"
                options={airportExitAssistanceOptions}
                required
              />
            )}
          </form.AppField>

          <form.AppField name="assistanceNeeds.additionalAssistance">
            {(field) => (
              <field.CheckboxGroupField
                label="Additional Assistance"
                optional
                options={additionalAssistanceOptions}
              />
            )}
          </form.AppField>

          <form.AppField name="assistanceNeeds.specialNotes">
            {(field) => (
              <field.TextareaField
                label="Special Notes"
                placeholder="Tell us anything else that would help us prepare for your arrival"
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
