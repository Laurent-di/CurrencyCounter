import type { Currency, ConversionParams } from './currency';

export type UseCurrencyConversionReturn = {
  currencies: Currency[];
  loading: boolean;
  error: string | null;
  convertedAmount: number | null;
  conversionError: string | null;
  performConversion: (params: ConversionParams) => Promise<void>;
};

