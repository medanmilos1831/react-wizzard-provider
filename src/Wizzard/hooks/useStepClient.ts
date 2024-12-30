import { useContext } from 'react';
import { StepContext } from '../contexts';

/**
 * useStepClient is a custom hook that provides the current step data from the StepContext.
 *
 * This hook allows components to access the step object, including its properties such as `data`, `nextStep`,
 * `updateStepData`, and `getData`, which are provided through the StepContext by the StepProvider.
 *
 * It is commonly used in components that need to interact with or display the details of the current step
 * in the wizard process.
 *
 * @returns The current step data from the StepContext.
 */
const useStepClient = () => {
  const step = useContext(StepContext);
  return step;
};

export { useStepClient };
