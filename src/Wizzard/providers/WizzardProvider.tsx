import { useState } from 'react';
import { WizzardContext } from '../contexts/WizzardContext';
import { IWizzardConfig, stepMapType } from '../types';
import { WizzardService } from '../WizzardService';
import { StepProvider } from './StepProvider';

const WizzardProvider = ({
  children,
  config,
}: {
  config: IWizzardConfig;
  children: (obj: {
    ActiveStep: () => JSX.Element;
    steps: stepMapType;
    activeStep: string;
    changeStep: WizzardService['changeStep'];
  }) => JSX.Element;
}) => {
  const [activeStep, setActiveStep] = useState(config.active);
  const [service, _] = useState(wizzService);
  function wizzService() {
    return new WizzardService(setActiveStep, config);
  }

  const ActiveStep = service.getActiveStep(activeStep);
  const steps = service.getStepsMap();
  return (
    <WizzardContext.Provider value={service}>
      {children({
        ActiveStep: () => (
          <StepProvider step={steps[activeStep]}>
            <ActiveStep />
          </StepProvider>
        ),
        steps,
        activeStep,
        changeStep: (step: string) => service.changeStep(step),
      })}
    </WizzardContext.Provider>
  );
};

export { WizzardProvider };
