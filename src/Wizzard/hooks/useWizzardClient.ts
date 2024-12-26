import { useContext } from 'react';
import { WizzardContext } from '../contexts/WizzardContext';

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
