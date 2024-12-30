import { useState } from 'react';
import { WizzardContext } from '../contexts/WizzardContext';
import { IWizzardConfig, stepMapType } from '../types';
import { WizzardService } from '../WizzardService';
import { StepProvider } from './StepProvider';

/**
 * WizzardProvider component
 *
 * Provides context and functionality for managing a multi-step wizard process.
 *
 * @param {object} props - Component props.
 * @param {IWizzardConfig} props.config - Configuration object for the wizard.
 * @param {(obj: { ActiveStep: () => JSX.Element; steps: stepMapType; activeStep: string; changeStep: WizzardService['changeStep'] }) => JSX.Element} props.children - Render function that receives wizard-related utilities.
 *
 * @returns {JSX.Element} The provider wrapping the child components.
 */
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
  // State to track the currently active step
  const [activeStep, setActiveStep] = useState(config.active);

  // State to initialize the WizzardService lazily
  const [service, _] = useState(wizzService);

  /**
   * Function to initialize the WizzardService instance.
   * This ensures lazy initialization, happening only once.
   *
   * @returns {WizzardService} The WizzardService instance.
   */
  function wizzService() {
    return new WizzardService(setActiveStep, config);
  }

  // Get the currently active step component
  const ActiveStep = service.getActiveStep(activeStep);

  // Get the map of steps for the wizard
  const steps = service.getStepsMap();

  return (
    <WizzardContext.Provider value={service}>
      {children({
        ActiveStep: () => (
          // StepProvider wraps the currently active step
          <StepProvider step={steps[activeStep]}>
            <ActiveStep />
          </StepProvider>
        ),
        steps, // All steps mapped
        activeStep, // The current active step ID
        changeStep: (step: string) => service.changeStep(step), // Function to change the active step
      })}
    </WizzardContext.Provider>
  );
};

export { WizzardProvider };
