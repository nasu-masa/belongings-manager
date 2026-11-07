import axios from 'axios';
import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function setValidationErrors<T extends FieldValues>(
  error: unknown,
  setError: UseFormSetError<T>,
  allowedFields: readonly Path<T>[],
): boolean {
  if (!axios.isAxiosError(error) || error.response?.status !== 422) {
    return false;
  }

  const data: unknown = error.response.data;

  if (!isRecord(data) || !isRecord(data.errors)) {
    return false;
  }

  let handled = false;

  for (const [field, messages] of Object.entries(data.errors)) {
    const formField = allowedFields.find(
      (allowedField) => allowedField === field,
    );
    const message = Array.isArray(messages) ? messages[0] : undefined;

    if (!formField || typeof message !== 'string' || !message) {
      continue;
    }

    setError(formField, {
      type: 'server',
      message,
    });

    handled = true;
  }
  return handled;
}
export default setValidationErrors;
