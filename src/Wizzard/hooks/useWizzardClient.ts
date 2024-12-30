import { useContext } from 'react';
import { WizzardContext } from '../contexts/WizzardContext';

/**
 * useWizzardClient is a custom hook that provides access to the wizard's context data and actions.
 *
 * This hook allows components to interact with the overall wizard state, including functionality to:
 * - Change the current step (`changeStep`)
 * - Update visibility of steps (`updateVisibility`)
 * - Get data for all steps (`getDataBySteps`)
 * - Get wizard data (`getWizzData`)
 *
 * It simplifies the interaction with the wizard's context by providing a set of convenient methods
 * to control and access the wizard's state.
 *
 * @returns An object containing the methods for interacting with the wizard context:
 *  - `changeStep`: A function to change the current step.
 *  - `updateVisibility`: A function to update the visibility of steps.
 *  - `getDataBySteps`: A function to retrieve the data for all steps.
 *  - `getWizzData`: A function to retrieve the wizard-specific data.
 */
const useWizzardClient = () => {
  const context = useContext(WizzardContext);
  return {
    changeStep: (step: string) => context.changeStep(step),
    updateVisibility: (steps: string[]) => context.updateVisibility(steps),
    getDataBySteps: () => context.getDataBySteps(),
    getWizzData: () => context.getWizzData(),
  };
};

export { useWizzardClient };
