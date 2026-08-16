export type FieldPresentationStatus =
  | "default"
  | "success"
  | "error";

type FieldMeta = {
  isBlurred: boolean;
  isTouched: boolean;
  isValid: boolean;
  errors: unknown[];
};

function getErrorMessage(error: unknown) {
  if (typeof error === "string") {
    return error;
  }

  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }

  return undefined;
}

export function getFieldPresentation(
  meta: FieldMeta,
): {
  status: FieldPresentationStatus;
  message?: string;
} {
  const shouldShowError =
    !meta.isValid &&
    meta.errors.length > 0 &&
    (meta.isBlurred || meta.isTouched);

  if (shouldShowError) {
    return {
      status: "error",
      message: getErrorMessage(meta.errors[0]),
    };
  }

  if (meta.isBlurred && meta.isValid) {
    return {
      status: "success",
    };
  }

  return {
    status: "default",
  };
}
