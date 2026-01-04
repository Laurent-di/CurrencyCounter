import type { Currency } from '../types/currency';

/**
 * Finds a currency by its code in an array of currencies
 */
export const findCurrencyByCode = (
  currencies: Currency[],
  code: string
): Currency | undefined => {
  return currencies.find((c) => c.code === code);
};

/**
 * Gets the currency code from a currency object or returns the code string
 */
export const getCurrencyCode = (
  currencies: Currency[],
  code: string
): string => {
  const currency = findCurrencyByCode(currencies, code);
  return currency?.code || code;
};

/**
 * Gets the currency symbol for a given currency code
 * Currently only supports USD symbol
 */
export const getCurrencySymbol = (currencyCode: string): string => {
  return currencyCode === 'USD' ? '$' : '';
};

/**
 * Formats currency for display (e.g., "US Dollar (USD)")
 */
export const formatCurrencyDisplay = (currency: Currency): string => {
  return `${currency.name} (${currency.code})`;
};

/**
 * Validates if a currency object is valid
 */
export const isValidCurrency = (currency: Currency): boolean => {
  return !!(
    currency &&
    currency.code &&
    currency.name &&
    typeof currency.code === 'string' &&
    typeof currency.name === 'string'
  );
};

/**
 * Validates if a currency code is valid (2-5 characters)
 */
export const isValidCurrencyCode = (code: string): boolean => {
  return code.length >= 2 && code.length <= 5;
};

/**
 * Sorts currencies alphabetically by code
 */
export const sortCurrencies = (currencies: Currency[]): Currency[] => {
  return [...currencies].sort((a, b) => a.code.localeCompare(b.code));
};

/**
 * Filters and validates currencies
 */
export const getValidCurrencies = (currencies: Currency[]): Currency[] => {
  return currencies.filter(
    (currency) => currency && currency.code && currency.name
  );
};

