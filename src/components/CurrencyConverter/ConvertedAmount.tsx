import type { Currency } from '../../types/currency';
import {
  ConvertedAmountContainer,
  ConvertedAmountLabel,
  ConvertedAmountValue,
  ExchangeRate,
} from '../../styles';
import {
  findCurrencyByCode,
  getCurrencyCode,
  getCurrencySymbol,
} from '../../utils/currency';
import {
  formatDisplayValue,
  parseAmount,
  isValidPositiveNumber,
} from '../../utils/numbers';
import { validateConversionInputs } from '../../utils/validation';

type ConvertedAmountProps = {
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  convertedAmount: number | null;
  currencies: Currency[];
  isPending: boolean;
};

const ConvertedAmount = ({
  fromCurrency,
  toCurrency,
  amount,
  convertedAmount,
  currencies,
  isPending,
}: ConvertedAmountProps) => {
  const getDisplayValue = (): string => {
    if (!validateConversionInputs(fromCurrency, toCurrency, amount)) {
      return '0';
    }
    if (isPending) {
      return formatDisplayValue(convertedAmount);
    }
    return formatDisplayValue(convertedAmount);
  };

  const getExchangeRate = (): string => {
    if (!validateConversionInputs(fromCurrency, toCurrency, amount)) {
      return '';
    }
    if (!isValidPositiveNumber(convertedAmount) || convertedAmount === null) {
      return '';
    }
    const rate = convertedAmount / parseAmount(amount);
    const fromCode = getCurrencyCode(currencies, fromCurrency);
    const toCode = getCurrencyCode(currencies, toCurrency);
    const symbol = getCurrencySymbol(toCode);
    return `1 ${fromCode} ≈ ${symbol}${formatDisplayValue(rate)}`;
  };

  const toCurrencyObj = findCurrencyByCode(currencies, toCurrency);
  const displayValue = getDisplayValue();
  const exchangeRate = getExchangeRate();
  const symbol = getCurrencySymbol(toCurrencyObj?.code || toCurrency);

  return (
    <ConvertedAmountContainer>
      <ConvertedAmountLabel as="label" htmlFor="converted-amount-display">
        CONVERTED AMOUNT
      </ConvertedAmountLabel>
      <ConvertedAmountValue
        id="converted-amount-display"
      >
        {symbol}{displayValue}
      </ConvertedAmountValue>
      {exchangeRate && (
        <ExchangeRate>
          {exchangeRate}
        </ExchangeRate>
      )}
    </ConvertedAmountContainer>
  );
};

export default ConvertedAmount;