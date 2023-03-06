export interface InputField {
  name: string;
  type: string;
  errorType: string;
  placeholder: string;
  label: string;
  icon: string;
  customErrors?: Record<string, string>;
  maxLength?: number;
}
