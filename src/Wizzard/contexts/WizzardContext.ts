import { createContext } from 'react';

/**
 * WizzardContext is a context used to provide the wizard service throughout the component tree.
 * It is intended to be used with the WizzardProvider to supply the wizard service, including step management
 * and navigation functionalities, to the components.
 *
 * The context value can be any type of wizard-related service or state, typically an instance of the WizzardService class.
 * Initially, the value is undefined until it is set by the WizzardProvider.
 */
const WizzardContext = createContext<any>(undefined);

export { WizzardContext };
