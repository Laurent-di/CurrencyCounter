import {
  ErrorCard,
  ErrorIcon,
  ErrorTitle,
  ErrorMessage,
  SetupInstructions,
  SetupTitle,
  SetupText,
  Code,
  Pre,
} from '../../styles';
import { API_KEY_ERROR } from '../../utils/constants';

type ErrorStateProps = {
  error: string;
};

export const ErrorState = ({ error }: ErrorStateProps) => {
  const showSetupInstructions = error.includes(API_KEY_ERROR);

  return (
    <ErrorCard>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorTitle>Error</ErrorTitle>
      <ErrorMessage>{error}</ErrorMessage>
      {showSetupInstructions && (
        <SetupInstructions>
          <SetupTitle>Setup Instructions:</SetupTitle>
          <SetupText>
            Create a <Code>.env</Code> file in the project root:
          </SetupText>
          <Pre>VITE_API_KEY=your_api_key_here</Pre>
        </SetupInstructions>
      )}
    </ErrorCard>
  );
};

