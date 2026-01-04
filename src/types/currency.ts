export type Currency = {
  code: string;
  name: string;
};

export type CurrenciesResponse = {
  response: {
    currencies: Record<string, string>;
  };
};

export type ConversionResponse = {
  response: {
    value: number;
  };
};

export type ConversionParams = {
  from: string;
  to: string;
  amount: number;
};

export type CurrenciesData = {
  code: string;
  decimal_mark: string;
  id: number;
  name: string;
  precision: number;
  short_code: string;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  thousands_separator: string;
};

export type ConversionData = {
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

// Type for unknown API response structures
export type UnknownApiResponse =
  | CurrenciesData
  | Record<string, CurrenciesData>
  | { response?: { currencies?: Record<string, string> | Record<string, CurrenciesData> } }
  | { currencies?: Record<string, string> | Record<string, CurrenciesData> }
  | Record<string, string>
  | ConversionData
  | { response?: { value?: number } }
  | { value?: number }
  | number
  | unknown;

// Type for currency item that could come in various formats
export type CurrencyItemInput = {
  short_code?: string;
  code?: string;
  currency_code?: string;
  name?: string;
  currency_name?: string;
  full_name?: string;
  [key: string]: unknown;
};
