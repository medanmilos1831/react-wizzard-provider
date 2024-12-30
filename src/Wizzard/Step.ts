import { IStepConfig } from './types';

/**
 * Represents a single step in the wizard flow.
 * Encapsulates step-specific data and methods for interacting with it.
 */
export class Step {
  step: string; // The identifier of the step
  element: () => JSX.Element; // The UI component associated with the step
  data: any; // The data associated with the step
  next: string | undefined; // The identifier of the next step, if any
  isLast: boolean; // Whether this step is the last in the wizard flow
  nextStep: () => void; // Callback to change to the next step
  updateStepData: (callback: (stepData: any) => void) => void; // Function to update step-specific data
  getData: () => any; // Function to retrieve the current data of the step
  isActive: boolean; // Whether this step is currently active

  /**
   * Creates an instance of the Step class.
   *
   * @param {IStepConfig} step - The configuration object for this step, including step ID, element, and data.
   * @param {boolean} isLast - Whether this step is the final step in the wizard flow.
   * @param {string | undefined} next - The identifier of the next step, if it exists.
   * @param {boolean} isActive - Whether this step is currently active.
   * @param {() => void} callback - A callback function for transitioning to the next step.
   */
  constructor(
    step: IStepConfig,
    isLast: boolean,
    next: string | undefined,
    isActive: boolean,
    callback: () => void
  ) {
    this.step = step.step;
    this.element = step.element;
    this.data = step.data;
    this.isActive = isActive;
    this.isLast = isLast;
    this.next = next;
    this.nextStep = callback;

    // Function to update the step's data using a provided callback
    this.updateStepData = (callback: (stepData: any) => void) => {
      this.data = callback(this.data);
    };

    // Function to retrieve the current step's data
    this.getData = () => {
      return this.data;
    };
  }
}
