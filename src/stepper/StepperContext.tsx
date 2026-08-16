import { createContext, useContext } from "react";

import type { StepId, StepStatus, FormUiSnapshot } from "./stepper.types";

export type StepperContextValue = {
  activeStep: StepId;
  activeStepIndex: number;

  completedSteps: ReadonlySet<StepId>;
  progress: number;

  isFirstStep: boolean;
  isLastStep: boolean;

  blockedStep: StepId | null;

  formSnapshot: FormUiSnapshot;
  publishFormSnapshot: (snapshot: FormUiSnapshot) => void;

  blockStep: (step: StepId) => void;
  unblockStep: (step: StepId) => void;
  completeStep: (step: StepId) => void;
  goNext: () => void;
  goBack: () => void;
  editStep: (step: StepId) => void;
  resetFlow: () => void;

  getStepStatus: (step: StepId) => StepStatus;
};

export const StepperContext = createContext<StepperContextValue | null>(null);

export function useStepper() {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error("useStepper must be used within StepperProvider");
  }

  return context;
}
