import styled from 'styled-components';

export const ErrorIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const ErrorIconLarge = styled(ErrorIcon)`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
`;

export const SetupInstructions = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
`;

export const Code = styled.code`
  background: #e9ecef;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
`;

export const Pre = styled.pre`
  background: #2d3748;
  color: #68d391;
  padding: 1rem;
  border-radius: 8px;
  overflow: auto;
  font-size: 0.85rem;
  line-height: 1.5;
`;

