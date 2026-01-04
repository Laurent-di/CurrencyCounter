import type { CurrencySelectProps } from '../types/components';
import { FormGroup, Label, LabelText, Select } from '../styles';
import { getValidCurrencies, formatCurrencyDisplay } from '../utils/currency';

export const CurrencySelect = ({
  currencies,
  value,
  onChange,
  label,
  id,
  disabled = false,
}: CurrencySelectProps) => {
  const isEmpty = currencies.length === 0;
  const isDisabled = disabled || isEmpty;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const validCurrencies = getValidCurrencies(currencies);

  return (
    <FormGroup>
      <Label htmlFor={id}>
        {label}
        {currencies.length > 0 && (
          <LabelText>({currencies.length} available)</LabelText>
        )}
      </Label>
      <Select
        id={id}
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
        isEmpty={isEmpty}
      >
        <option value="">
          {isEmpty ? 'No currencies available' : 'Select currency'}
        </option>
        {validCurrencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {formatCurrencyDisplay(currency)}
          </option>
        ))}
      </Select>
    </FormGroup>
  );
};

