import styled from "styled-components";
import { shouldForwardProp } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;

type SwapButtonProps = {
  disabled?: boolean;
};

export const SwapButton = styled.button.withConfig({
  shouldForwardProp: () => true,
})<SwapButtonProps>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background: #4a90e2;
  color: white;
  cursor: ${(props: SwapButtonProps) =>
    props.disabled ? "not-allowed" : "pointer"};
  opacity: ${(props: SwapButtonProps) => (props.disabled ? 0.5 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  align-self: center;
  grid-column: 3;
  grid-row: 1;

  &:hover:not(:disabled) {
    background: #357abd;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0) scale(0.98);
  }
`;

export const ReloadButton = styled.button`
  padding: 0.875rem 2rem;
  margin-top: 1rem;
  cursor: pointer;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: #357abd;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;
