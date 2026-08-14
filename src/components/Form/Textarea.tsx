import type { TextareaHTMLAttributes } from "react";

import type { FieldStatus } from "./FieldShell";
import {
  controlSharedStyles,
  getControlStatusStyles,
} from "./form-control.styles";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  status?: FieldStatus;
};

export function Textarea({
  status = "default",
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={[
        controlSharedStyles,
        getControlStatusStyles(status),
        "min-h-24 resize-y px-4 py-3",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
