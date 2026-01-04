import { LoadingCard, Spinner, LoadingText } from '../../styles';

const LoadingState = () => {
  return (
    <LoadingCard>
      <Spinner />
      <LoadingText>Loading currencies...</LoadingText>
    </LoadingCard>
  );
};

export default LoadingState;