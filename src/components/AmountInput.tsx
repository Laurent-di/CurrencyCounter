import type { AmountInputProps } from "../types/components";
import { FormGroup, Label, Input } from "../styles";
import { NUMERIC_REGEX } from "../utils/constants";

export const AmountInput = ({
  value,
  onChange,
  label,
  id,
  disabled = false,
  readOnly = false,
}: AmountInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "" || NUMERIC_REGEX.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <FormGroup>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleChange}
        disabled={disabled || readOnly}
        readOnly={readOnly}
        placeholder={readOnly ? "" : "0.00"}
        aria-label={readOnly ? "Converted amount (read-only)" : "Amount to convert"}
      />
    </FormGroup>
  );
};
