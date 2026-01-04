import type { Currency } from './currency';

export type CurrencySelectProps = {
  currencies: Currency[];
  value: string;
  onChange: (currencyCode: string) => void;
  label: string;
  id: string;
  disabled?: boolean;
};

export type AmountInputProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  id: string;
  disabled?: boolean;
  readOnly?: boolean;
};

