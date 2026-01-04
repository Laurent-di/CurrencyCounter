import { ErrorNotification, LargeIcon, ReloadButton, ErrorMessage } from '../styles';

export const ErrorFallback = ({ error, resetErrorBoundary }: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <ErrorNotification>
      <LargeIcon>⚠️</LargeIcon>
      <ErrorMessage>
       {error.message}
      </ErrorMessage>
      <ReloadButton onClick={resetErrorBoundary}>
        Reload Page
      </ReloadButton>
    </ErrorNotification>
  );
};

