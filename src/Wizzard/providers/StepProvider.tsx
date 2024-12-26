import { PropsWithChildren } from 'react';
import { StepContext } from '../contexts';

const StepProvider = ({ children, step }: PropsWithChildren<{ step: any }>) => {
  return <StepContext.Provider value={step}>{children}</StepContext.Provider>;
};

export { StepProvider };
