export type FieldErrorFunc = (field: string) => string;

export interface ErrorType {
  key: string;
  value: string | FieldErrorFunc;
}
