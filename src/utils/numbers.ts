import { DECIMAL_PLACES } from './constants';

/**
 * Formats a number to a fixed number of decimal places
 */
export const formatNumber = (
  value: number | null,
  decimals: number = DECIMAL_PLACES.DISPLAY
): string => {
  if (value === null || isNaN(value)) {
    return '0';
  }
  return value.toFixed(decimals);
};

/**
 * Parses a string amount to a number
 */
export const parseAmount = (amount: string): number => {
  return parseFloat(amount) || 0;
};

/**
 * Validates if an amount string is valid (greater than 0)
 */
export const isValidAmount = (amount: string): boolean => {
  const parsed = parseAmount(amount);
  return parsed > 0;
};

/**
 * Validates if a number is valid and greater than 0
 */
export const isValidPositiveNumber = (value: number | null): boolean => {
  return value !== null && !isNaN(value) && value > 0;
};

/**
 * Formats amount for display (2 decimal places)
 */
export const formatAmount = (value: number | null): string => {
  return formatNumber(value, DECIMAL_PLACES.AMOUNT);
};

/**
 * Formats display value (4 decimal places)
 */
export const formatDisplayValue = (value: number | null): string => {
  return formatNumber(value, DECIMAL_PLACES.DISPLAY);
};

