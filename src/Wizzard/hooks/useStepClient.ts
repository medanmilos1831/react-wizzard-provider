import { useContext } from 'react';
import { StepContext } from '../contexts';

const useStepClient = () => {
  const step = useContext(StepContext);
  return step;
};

export { useStepClient };
