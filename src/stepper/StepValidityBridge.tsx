import { useEffect } from "react";

import { useStepper } from "./StepperContext";
import type { StepId } from "./stepper.types";

type StepValidityBridgeProps = {
  step: StepId;
  isValid: boolean;
};

export function StepValidityBridge({
  step,
  isValid,
}: StepValidityBridgeProps) {
  const { blockStep, unblockStep } = useStepper();

  useEffect(() => {
    if (isValid) {
      unblockStep(step);
      return;
    }

    blockStep(step);
  }, [blockStep, isValid, step, unblockStep]);

  return null;
}
