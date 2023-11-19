import { forwardRef, ReactNode, SyntheticEvent } from 'react';
import { FormGroup /*Row, Col*/ } from '@snsw/react-component-library';
import { StyledInput } from './styles';

interface InputProps {
  type?: string;
  inputName: string;
  label: string | ReactNode;
  error: string;
  helpMessage?: string | ReactNode;
  required?: boolean;
  maxLength?: number;
  disabled?: boolean;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  onBlur: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputName,
      label,
      helpMessage,
      error,
      required,
      maxLength,
      onChange,
      onBlur,
      disabled,
      type = 'text',
    },
    ref,
  ) => (
    <FormGroup
      id={inputName}
      label={required ? `${label} *` : label}
      helpMessage={helpMessage}
      errorMessage={error}
      isRequired={required}
      hasError={!!error}
    >
      <StyledInput
        type={type}
        name={inputName}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        hasError={!!error}
        maxLength={maxLength}
        disabled={disabled}
      />
    </FormGroup>
  ),
);

InputField.displayName = 'InputField';

export default InputField;
