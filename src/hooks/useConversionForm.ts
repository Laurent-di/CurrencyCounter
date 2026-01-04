import { useState, useEffect, useCallback, useTransition, useDeferredValue } from 'react';
import type { ConversionParams } from '../types/currency';
import { DEBOUNCE_DELAY } from '../utils/constants';
import { validateConversionInputs } from '../utils/validation';
import { parseAmount, formatAmount, isValidPositiveNumber } from '../utils/numbers';

type UseConversionFormParams = {
  performConversion: (params: ConversionParams) => Promise<void>;
  convertedAmount: number | null;
};

type UseConversionFormReturn = {
  fromCurrency: string;
  targetCurrency: string;
  amountInput: string;
  isPending: boolean;
  deferredConvertedAmount: number | null;
  setFromCurrency: (currency: string) => void;
  setTargetCurrency: (currency: string) => void;
  setAmountInput: (amount: string) => void;
  handleSwapCurrencies: () => void;
};

export const useConversionForm = ({
  performConversion,
  convertedAmount,
}: UseConversionFormParams): UseConversionFormReturn => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [isPending, startTransition] = useTransition();

  const deferredAmount = useDeferredValue(amountInput);
  const deferredConvertedAmount = useDeferredValue(convertedAmount);

  useEffect(() => {
    if (!validateConversionInputs(fromCurrency, targetCurrency, deferredAmount)) {
      return;
    }

    const timeoutId = setTimeout(() => {
      startTransition(() => {
        const params: ConversionParams = {
          from: fromCurrency,
          to: targetCurrency,
          amount: parseAmount(deferredAmount),
        };
        performConversion(params);
      });
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timeoutId);
  }, [fromCurrency, targetCurrency, deferredAmount, performConversion, startTransition]);

  const handleSwapCurrencies = useCallback(() => {
    setFromCurrency(targetCurrency);
    setTargetCurrency(fromCurrency);

    if (isValidPositiveNumber(convertedAmount)) {
      setAmountInput(formatAmount(convertedAmount));
    }
  }, [fromCurrency, targetCurrency, convertedAmount]);

  return {
    fromCurrency,
    targetCurrency,
    amountInput,
    isPending,
    deferredConvertedAmount,
    setFromCurrency,
    setTargetCurrency,
    setAmountInput,
    handleSwapCurrencies,
  };
};


