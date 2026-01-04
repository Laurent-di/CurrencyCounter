import styled from 'styled-components';

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CurrencyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  grid-template-rows: 1fr;
  gap: 1rem;
  align-items: end;
  margin-bottom: 0;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  line-height: 1.4;
`;

export const LabelText = styled.span`
  color: #6c757d;
  font-weight: 400;
  font-size: 0.85rem;
  margin-left: 0.5rem;
  text-transform: none;
`;

type SelectProps = {
  disabled?: boolean;
  isEmpty?: boolean;
};

export const Select = styled.select.withConfig({
  shouldForwardProp: (prop) => prop !== 'isEmpty',
}) <SelectProps>`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: ${(props: SelectProps) =>
    props.disabled || props.isEmpty ? '#f3f4f6' : 'white'};
  color: ${(props: SelectProps) =>
    props.disabled || props.isEmpty ? '#9ca3af' : '#1a1a1a'};
  cursor: ${(props: SelectProps) =>
    props.disabled || props.isEmpty ? 'not-allowed' : 'pointer'};
  outline: none;
  appearance: none;
  background-image: ${(props: SelectProps) =>
    props.disabled || props.isEmpty
      ? 'none'
      : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")"};
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  transition: all 0.2s ease;
  line-height: 1.5;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  &:hover:not(:disabled) {
    border-color: #9ca3af;
  }
`;

type InputProps = {
  readOnly?: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-weight: ${(props: InputProps) => (props.readOnly ? 600 : 400)};
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: ${(props: InputProps) => (props.readOnly ? '#f8f9fa' : 'white')};
  color: ${(props: InputProps) => (props.readOnly ? '#4a90e2' : '#1a1a1a')};
  outline: none;
  cursor: ${(props: InputProps) => (props.readOnly ? 'default' : 'text')};
  transition: all 0.2s ease;
  line-height: 1.5;

  &:focus {
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }

  &:hover:not(:disabled):not([readonly]) {
    border-color: #9ca3af;
  }
`;

export const ConvertedAmountContainer = styled.div`
  background: #e6f2ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ConvertedAmountLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  color: #1a365d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
  display: block;
  line-height: 1.4;
`;

export const ConvertedAmountValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

export const ExchangeRate = styled.div`
  font-size: 0.875rem;
  color: #4a5568;
  line-height: 1.4;
`;



export const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const ErrorNotification = styled(FormWrapper)`
  border: 2px solid #ff6b6b;
  text-align: center;
`;

export const LoadingCard = styled(FormWrapper)`
  text-align: center;
  padding: 3rem 2rem;
`;

