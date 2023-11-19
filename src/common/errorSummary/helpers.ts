export const isString = (value: any) =>
  (typeof value === 'string' || value instanceof String) && value !== '';

export const hasError = (errorsList: Record<string, string>): boolean =>
  Object.values(errorsList).some((p) => isString(p));
