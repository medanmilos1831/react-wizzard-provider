import { createContext } from 'react';

/**
 * StepContext is a context used to provide the current step data throughout the component tree.
 * It is intended to be used with a StepProvider to supply the active step's data to the components.
 *
 * The context value can be set to any type of step data, depending on the structure of your wizard or step process.
 * Initially, the value is undefined until it is set by the StepProvider.
 */
const StepContext = createContext<any>(undefined);

export { StepContext };
