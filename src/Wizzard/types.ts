/**
 * Configuration interface for the Wizard component.
 */
export interface IWizzardConfig {
  /**
   * Callback function to be called when the wizard finishes.
   * This will receive the final data of the wizard after all steps are completed.
   *
   * @param values - The final values collected from all the steps in the wizard.
   */
  onFinish: (values: any) => void;

  /**
   * Callback function triggered whenever the active step changes.
   * This allows handling the state or any other side-effects when a new step becomes active.
   *
   * @param values - The data or state associated with the new active step.
   */
  onStepChange: (values: any) => void;

  /**
   * The identifier of the initially active step in the wizard.
   * This value should match one of the step identifiers defined in the `steps` array.
   */
  active: string;

  /**
   * List of step configurations for the wizard. Each step defines its properties, including its identifier, UI component, and optional data.
   */
  steps: IStepConfig[];

  /**
   * Optional field for storing additional data related to the wizard. This can hold any extra information
   * that might be shared or needed by multiple steps in the wizard.
   */
  wizzData?: any;
}

/**
 * Extended step interface that includes additional properties for navigation and data handling.
 * This interface is used to define the individual steps in the wizard with specific behavior such as navigation to the next step,
 * data updates, and getting the current data.
 */
export interface IStep extends IStepConfig {
  /**
   * Identifier for the next step in the wizard.
   * If undefined, the current step is considered the last step.
   */
  next?: string | undefined;

  /**
   * Flag to indicate if this step is the last one in the wizard.
   * If true, no further steps are available after this one.
   */
  isLast?: boolean;

  /**
   * Function that will be called to move to the next step in the wizard.
   * This is typically invoked when a user navigates to the next step.
   */
  nextStep?: () => void;

  /**
   * Function to update the step's data.
   * This allows modifying the data associated with a specific step during its lifecycle.
   *
   * @param data - The new data for the step.
   */
  updateStepData?: (data: any) => void;

  /**
   * Function to retrieve the current data of the step.
   * This is useful when you need to fetch or process the step data, such as when moving to the next step.
   */
  getData?: () => any;

  /**
   * Flag to indicate whether this step is currently active.
   * This helps in rendering the step only when it is the active step in the wizard.
   */
  isActive: boolean;
}

/**
 * Basic configuration for each step in the wizard.
 * Each step has a unique identifier (`step`), a UI component (`element`), and optional data (`data`).
 */
export interface IStepConfig {
  /**
   * The unique identifier for the step.
   * This is used to reference the step and define its order within the wizard.
   */
  step: string;

  /**
   * A function that returns the JSX element to be rendered for this step.
   * This represents the content that will be shown to the user during this step.
   */
  element: () => JSX.Element;

  /**
   * Optional data specific to this step.
   * This data can be used to store and manipulate values required by the step.
   */
  data?: any;
}

/**
 * Type for updating the active step in the wizard.
 * This is a React dispatch function that is used to change the active step's state.
 */
export type stepUpdateType = React.Dispatch<React.SetStateAction<string>>;

/**
 * Type representing a mapping of step identifiers to their corresponding step objects.
 * This allows easy lookup of steps by their unique identifiers in the wizard.
 */
export type stepMapType = { [key: string]: IStep };
