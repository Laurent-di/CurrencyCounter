import { ErrorCard, ErrorIconLarge, ErrorTitleLarge, ErrorMessageLarge, ReloadButton } from '../styles';
import { extractErrorMessage } from '../utils/errors';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <ErrorCard>
      <ErrorIconLarge>⚠️</ErrorIconLarge>
      <ErrorTitleLarge>Something went wrong</ErrorTitleLarge>
      <ErrorMessageLarge>
        {extractErrorMessage(error, 'An unexpected error occurred')}
      </ErrorMessageLarge>
      <ReloadButton onClick={resetErrorBoundary}>
        Reload Page
      </ReloadButton>
    </ErrorCard>
  );
};

