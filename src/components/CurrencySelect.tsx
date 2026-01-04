import type { CurrencySelectProps } from '../types/components';
import { Group, Label, LabelText, Select } from '../styles';
import { getValidCurrencies, formatCurrencyDisplay } from '../utils/currency';

export const CurrencySelect = ({
  currencies: initialCurrencies,
  value: selectedValue,
  onChange,
  label,
  id,
  disabled = false,
}: CurrencySelectProps) => {
  const isEmpty = initialCurrencies.length === 0;
  const isDisabled = disabled || isEmpty;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const currencies = getValidCurrencies(initialCurrencies);

  return (
    <Group>
      <Label htmlFor={id}>
        {label}
        {initialCurrencies.length > 0 && (
          <LabelText>({currencies.length} available)</LabelText>
        )}
      </Label>
      <Select
        id={id}
        value={selectedValue}
        onChange={handleChange}
        disabled={isDisabled}
        isEmpty={isEmpty}
      >
        <option value="">
          {isEmpty ? 'No currencies available' : 'Select currency'}
        </option>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {formatCurrencyDisplay(currency)}
          </option>
        ))}
      </Select>
    </Group>
  );
};

