export type Currency = {
  code: string;
  name: string;
};

export type ConversionParams = {
  from: string;
  to: string;
  amount: number;
};

export type ApiResponse = {
  id: number;
  name: string;
  short_code: string;
  code: string;
  precision: number;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  decimal_mark: string;
  thousands_separator: string;
};

export type ConversionsType = {
  meta: {
    code: number;
    disclaimer: string;
  };
  response: {
    timestamp: number;
    date: string;
    from: string;
    to: string;
    amount: number;
    value: number;
  };
  timestamp: number;
  date: string;
  from: string;
  to: string;
  amount: number;
  value: number;
};

export type CurrencyInput = {
  short_code?: string;
  code?: string;
  currency_code?: string;
  name?: string;
  currency_name?: string;
  full_name?: string;
  [key: string]: unknown;
};
