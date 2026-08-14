import { useCallback, useMemo, useState, type ReactNode } from "react";

import { StepperContext } from "./StepperContext";
import { steps } from "./stepper.config";
import type { FormUiSnapshot, StepId, StepStatus } from "./stepper.types";

const initialFormSnapshot: FormUiSnapshot = {
  passenger: {
    name: "",
    email: "",
    phone: "",
    passengerCount: 1,
  },

  flight: {
    flightLabel: "",
    routeLabel: "",
  },

  assistance: {
    typeLabel: "",
  },
};

type StepperProviderProps = {
  children: ReactNode;
};

export function StepperProvider({ children }: StepperProviderProps) {
  const [activeStep, setActiveStep] = useState<StepId>("passengerDetails");

  const [formSnapshot, setFormSnapshot] =
    useState<FormUiSnapshot>(initialFormSnapshot);

  const publishFormSnapshot = useCallback((snapshot: FormUiSnapshot) => {
    setFormSnapshot(snapshot);
  }, []);

  const [completedSteps, setCompletedSteps] = useState<Set<StepId>>(
    () => new Set()
  );

  const activeStepIndex = steps.findIndex((step) => step.id === activeStep);

  const completeStep = useCallback((step: StepId) => {
    setCompletedSteps((current) => {
      const next = new Set(current);
      next.add(step);

      return next;
    });
  }, []);

  const goNext = useCallback(() => {
    setActiveStep((currentStep) => {
      const currentIndex = steps.findIndex((step) => step.id === currentStep);

      return steps[currentIndex + 1]?.id ?? currentStep;
    });
  }, []);

  const goBack = useCallback(() => {
    setActiveStep((currentStep) => {
      const currentIndex = steps.findIndex((step) => step.id === currentStep);

      return steps[currentIndex - 1]?.id ?? currentStep;
    });
  }, []);

  const goToStep = useCallback((step: StepId) => {
    setActiveStep(step);
  }, []);

  const getStepStatus = useCallback(
    (step: StepId): StepStatus => {
      if (step === activeStep) {
        return "active";
      }

      if (completedSteps.has(step)) {
        return "completed";
      }

      return "pending";
    },
    [activeStep, completedSteps]
  );

  const value = useMemo(
    () => ({
      activeStep,
      activeStepIndex,
      completedSteps,
      progress: ((activeStepIndex + 1) / steps.length) * 100,

      isFirstStep: activeStepIndex === 0,
      isLastStep: activeStepIndex === steps.length - 1,

      formSnapshot,
      publishFormSnapshot,

      completeStep,
      goNext,
      goBack,
      goToStep,
      getStepStatus,
    }),
    [
      activeStep,
      activeStepIndex,
      completedSteps,
      formSnapshot,
      publishFormSnapshot,
      completeStep,
      goNext,
      goBack,
      goToStep,
      getStepStatus,
    ]
  );

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
}
