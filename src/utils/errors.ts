/**
 * Extracts error message from an error object
 */
export const extractErrorMessage = (
  error: unknown,
  defaultMessage: string = 'An error occurred'
): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return defaultMessage;
};

/**
 * Formats error response data for display
 */
export const formatErrorResponse = (
  data: unknown,
  maxLength: number = 300
): string => {
  try {
    return JSON.stringify(data).substring(0, maxLength);
  } catch {
    return String(data).substring(0, maxLength);
  }
};

