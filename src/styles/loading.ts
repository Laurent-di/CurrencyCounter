import styled from 'styled-components';

type SpinnerProps = {
  size?: string;
  borderWidth?: string;
};

export const Spinner = styled.div<SpinnerProps>`
  border: ${(props: SpinnerProps) => props.borderWidth || '3px'} solid #f3f3f3;
  border-top: ${(props: SpinnerProps) => props.borderWidth || '3px'} solid #4a90e2;
  border-radius: 50%;
  width: ${(props: SpinnerProps) => props.size || '40px'};
  height: ${(props: SpinnerProps) => props.size || '40px'};
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


