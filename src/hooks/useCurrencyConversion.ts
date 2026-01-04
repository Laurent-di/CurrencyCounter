import { useState, useEffect, useCallback } from 'react';
import { fetchCurrencies, convertCurrency } from '../api/currencyApi';
import type { Currency, ConversionParams } from '../types/currency';
import type { UseCurrencyConversionReturn } from '../types/hooks';
import { isValidCurrency, sortCurrencies } from '../utils/currency';
import { extractErrorMessage } from '../utils/errors';

export const useCurrencyConversion = (): UseCurrencyConversionReturn => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [conversionError, setConversionError] = useState<string | null>(null);

  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCurrencies();

        const validCurrencies = data.filter(isValidCurrency);

        if (validCurrencies.length === 0) {
          throw new Error('No valid currencies received from API');
        }

        const sortedCurrencies = sortCurrencies(validCurrencies);
        setCurrencies(sortedCurrencies);
      } catch (err) {
        const errorMessage = extractErrorMessage(err, 'Failed to load currencies');
        setError(errorMessage);
        setCurrencies([]);
      } finally {
        setLoading(false);
      }
    };

    loadCurrencies();
  }, []);

  const performConversion = useCallback(async (params: ConversionParams) => {
    try {
      setConversionError(null);
      const result = await convertCurrency(params);
      setConvertedAmount(result);
    } catch (err) {
      const errorMessage = extractErrorMessage(err, 'Failed to convert currency');
      setConversionError(errorMessage);
      setConvertedAmount(null);
    }
  }, []);

  return {
    currencies,
    loading,
    error,
    convertedAmount,
    conversionError,
    performConversion,
  };
};
