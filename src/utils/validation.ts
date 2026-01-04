import { isValidAmount } from './numbers';

/**
 * Validates conversion input parameters
 */
export const validateConversionInputs = (
  fromCurrency: string,
  toCurrency: string,
  amount: string
): boolean => {
  return !!(
    fromCurrency &&
    toCurrency &&
    amount &&
    isValidAmount(amount)
  );
};

/**
 * Validates if an object is a valid object (not null, not array)
 */
export const isValidObject = (
  value: unknown
): value is Record<string, unknown> => {
  return (
    typeof value === 'object' && value !== null && !Array.isArray(value)
  );
};

/**
 * Validates currency conversion parameters
 */
export const validateConversionParams = (
  from: string,
  to: string,
  amount: number
): boolean => {
  return !!(from && to && amount > 0);
};

