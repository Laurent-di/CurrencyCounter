import { ErrorBoundary } from 'react-error-boundary';
import MainConverter from './components/CurrencyConverter/MainConverter';
import { ErrorFallback } from './components/ErrorFallback';
import styled from 'styled-components';
import { AppHeader, PageTitle, PageSubtitle } from './styles';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
`;

const AssessmentLabel = styled.div`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 600;
  color: #1a365d;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        console.error('Error caught by boundary:', error);
      }}
      onReset={() => {
        window.location.reload();
      }}
    >
      <AppContainer>
        <AssessmentLabel>Currency beacon assessment</AssessmentLabel>
        <AppHeader>
          <PageTitle>Currency converter</PageTitle>
          <PageSubtitle>Convert between global currencies.</PageSubtitle>
        </AppHeader>
        <MainConverter />
      </AppContainer>
    </ErrorBoundary>
  );
}

export default App;
