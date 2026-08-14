export type FieldPresentationStatus =
  | "default"
  | "success"
  | "error";

type FieldMeta = {
  isBlurred: boolean;
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
  if (!meta.isBlurred) {
    return {
      status: "default",
    };
  }

  if (meta.isValid) {
    return {
      status: "success",
    };
  }

  return {
    status: "error",
    message: getErrorMessage(meta.errors[0]),
  };
}