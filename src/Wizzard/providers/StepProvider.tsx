import { PropsWithChildren } from 'react';
import { StepContext } from '../contexts';

/**
 * StepProvider component
 *
 * Provides a specific step's context to its child components.
 *
 * @param {object} props - Component props.
 * @param {any} props.step - The step data to be provided via the context.
 * @param {React.ReactNode} props.children - Child components that will have access to the step context.
 *
 * @returns {JSX.Element} A provider wrapping the child components with step-specific context.
 */
const StepProvider = ({ children, step }: PropsWithChildren<{ step: any }>) => {
  return (
    // Provides the step data to all children through the StepContext
    <StepContext.Provider value={step}>{children}</StepContext.Provider>
  );
};

export { StepProvider };
