import type { Currency } from '../../types/currency';
import { CurrencySelect } from '../CurrencySelect';
import { SwapButton, CurrencyGrid } from '../../styles';

type CurrencySelectionProps = {
  currencies: Currency[];
  fromCurrency: string;
  toCurrency: string;
  onFromCurrencyChange: (code: string) => void;
  onToCurrencyChange: (code: string) => void;
  onSwap: () => void;
  disabled?: boolean;
};

const SelectCurrency = ({
  currencies,
  fromCurrency,
  toCurrency,
  onFromCurrencyChange,
  onToCurrencyChange,
  onSwap,
  disabled = false,
}: CurrencySelectionProps) => {
  const isSwapDisabled = !fromCurrency || !toCurrency;

  return (
    <CurrencyGrid>
      <CurrencySelect
        currencies={currencies}
        value={fromCurrency}
        onChange={onFromCurrencyChange}
        label="From currency"
        id="from-currency"
        disabled={disabled}
      />
      <CurrencySelect
        currencies={currencies}
        value={toCurrency}
        onChange={onToCurrencyChange}
        label="To currency"
        id="to-currency"
        disabled={disabled}
      />
      <SwapButton
        onClick={onSwap}
        disabled={isSwapDisabled}
        aria-label="Swap currencies"
      >
        ⇅
      </SwapButton>
    </CurrencyGrid>
  );
};

export default SelectCurrency;