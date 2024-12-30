import { Step } from './Step';
import { IWizzardConfig, stepMapType, stepUpdateType } from './types';

/**
 * A service responsible for managing the state and behavior of the wizard.
 * This class handles the logic for navigating between steps, updating step data,
 * and providing step components and associated data.
 */
export class WizzardService {
  private stepUpdate: stepUpdateType;
  private stepsMap: stepMapType = {};
  private wizzData: any = undefined;
  private onStepChange: (values: any) => void;
  private onFinish: (values: any) => void;

  /**
   * Constructor for the WizzardService.
   * Initializes the steps map, the wizard data, and sets up the step change and finish callbacks.
   *
   * @param stepUpdate - Function to update the active step in the wizard.
   * @param config - Configuration object for the wizard, including the steps, active step, and callback functions.
   */
  constructor(stepUpdate: stepUpdateType, config: IWizzardConfig) {
    this.onFinish = config.onFinish;
    this.onStepChange = config.onStepChange;
    this.stepUpdate = stepUpdate;
    const { steps, wizzData } = config;

    // Initialize the steps map with Step objects
    steps.forEach((item, index) => {
      this.stepsMap[item.step] = new Step(
        item,
        steps.length - 1 === index, // Mark the last step as the final step
        steps.length - 1 === index ? undefined : steps[index + 1].step, // Set the next step if it's not the last step
        config.active === item.step, // Set this step as active if it matches the active step from config
        steps.length - 1 === index
          ? () => {
              this.onFinish(this.getDataByStep()); // Final step triggers onFinish callback with wizard data
            }
          : () => {
              this.changeStep(steps[index + 1].step); // Other steps trigger changeStep to move to next step
            }
      );
    });
    this.wizzData = wizzData;
  }

  /**
   * Retrieves the collected data for all steps in the wizard.
   *
   * @returns - An object where each key corresponds to a step, and the value is the step's data.
   */
  private getDataByStep() {
    return Object.keys(this.stepsMap).reduce((acc: any, key) => {
      acc[key] = this.stepsMap[key].data;
      return acc;
    }, {});
  }

  /**
   * Gets the component for the active step.
   *
   * @param activeStep - The identifier of the currently active step.
   * @returns - The JSX element representing the active step.
   */
  getActiveStep(activeStep: string) {
    return this.stepsMap[activeStep].element;
  }

  /**
   * Retrieves the map of all steps in the wizard.
   *
   * @returns - An object mapping step identifiers to their corresponding step objects.
   */
  getStepsMap() {
    return this.stepsMap;
  }

  /**
   * Handles the internal logic of step change, including marking steps as active or inactive.
   * It also triggers the onStepChange callback with the old and new step identifiers.
   *
   * @param oldValue - The identifier of the previous active step.
   * @param newValue - The identifier of the newly active step.
   */
  private _onStepChange(oldValue: string, newValue: string) {
    // Deactivate the previous step and activate the new step
    this.stepsMap[oldValue].isActive = false;
    this.stepsMap[newValue].isActive = true;
    // Trigger the step change callback with the old and new values
    this.onStepChange({
      oldValue,
      newValue,
      steps: this.stepsMap,
    });
  }

  /**
   * Changes the active step to the specified step.
   * This updates the active step state and triggers the step change logic.
   *
   * @param step - The identifier of the new active step.
   */
  changeStep(step: string) {
    this.stepUpdate((prev: string) => {
      this._onStepChange(prev, step); // Call the internal step change handler
      return step; // Update the active step state
    });
  }

  /**
   * Retrieves the data for all steps in a simplified format.
   * This function returns only the data associated with each step without other properties.
   *
   * @returns - An object mapping step identifiers to their respective data.
   */
  getDataBySteps() {
    let result = Object.entries(this.stepsMap).reduce(
      (acc: any, [key, value]) => {
        acc[key] = { data: value.data };
        return acc;
      },
      {}
    );
    return result;
  }

  /**
   * Retrieves the wizard data, which is optional and set by the user in the config.
   *
   * @returns - The wizard data if provided in the configuration, or undefined if not set.
   */
  getWizzData() {
    return this.wizzData;
  }
}
