import styled from 'styled-components';

export const AppHeader = styled.header`
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: left;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

export const PageSubtitle = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #4a5568;
  margin-bottom: 0;
  line-height: 1.5;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 0;
  text-align: left;
`;

export const ErrorTitle = styled.h2`
  color: #c92a2a;
  margin-top: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ErrorTitleLarge = styled(ErrorTitle)`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: center;
`;

export const ErrorMessageLarge = styled(ErrorMessage)`
  margin-bottom: 2rem;
  font-size: 1rem;
`;

export const LoadingText = styled.p`
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const ConversionError = styled.div`
  padding: 1rem;
  background: #fff5f5;
  border: 1px solid #fc8181;
  border-radius: 12px;
  color: #c53030;
  font-size: 0.9rem;
  text-align: center;
`;

export const SetupTitle = styled.p`
  color: #495057;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const SetupText = styled.p`
  color: #666;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;
