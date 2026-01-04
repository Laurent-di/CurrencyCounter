import { useCurrencyConversion } from '../../hooks/useCurrencyConversion';
import { useConversionForm } from '../../hooks/useConversionForm';
import { AmountInput } from '../AmountInput';
import { FormWrapper, FormSection, ConversionError } from '../../styles';
import LoadingState from './LoadingState';
import { ErrorState } from './ErrorState';
import SelectCurrency from './CurrencySelection';
import ConvertedAmount from './ConvertedAmount';

const MainConverter = () => {
  const {
    currencies,
    loading,
    error,
    convertedAmount,
    performConversion,
    conversionError,
  } = useCurrencyConversion();

  const {
    fromCurrency,
    targetCurrency,
    setTargetCurrency,
    amountInput,
    isPending,
    deferredConvertedAmount,
    setFromCurrency,
    setAmountInput,
    handleSwapCurrencies,
  } = useConversionForm({ performConversion, convertedAmount });

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  return (
    <FormWrapper>
      <FormSection>
        <SelectCurrency
          currencies={currencies}
          fromCurrency={fromCurrency}
          toCurrency={targetCurrency}
          onFromCurrencyChange={setFromCurrency}
          onToCurrencyChange={setTargetCurrency}
          onSwap={handleSwapCurrencies}
          disabled={loading}
        />
        <AmountInput
          value={amountInput}
          onChange={setAmountInput}
          label="Amount"
          id="amount"
          disabled={loading || !fromCurrency}
        />
        <ConvertedAmount
          fromCurrency={fromCurrency}
          toCurrency={targetCurrency}
          amount={amountInput}
          convertedAmount={deferredConvertedAmount}
          currencies={currencies}
          isPending={isPending}
        />
        {conversionError && (
          <ConversionError>
            Conversion error: {conversionError}
          </ConversionError>
        )}
      </FormSection>
    </FormWrapper>
  );
};

export default MainConverter;