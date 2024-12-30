export interface IWizzardConfig {
  onFinish: (values: any) => void;
  onStepChange: (values: any) => void;
  active: string;
  steps: IStepConfig[];
  wizzData?: any;
}

export interface IStep extends IStepConfig {
  next?: string | undefined;
  isLast?: boolean;
  nextStep?: () => void;
  updateStepData?: (data: any) => void;
  getData?: () => any;
  isActive: boolean;
}

export interface IStepConfig {
  step: string;
  element: () => JSX.Element;
  data?: any;
}

export type stepUpdateType = React.Dispatch<React.SetStateAction<string>>;

export type stepMapType = { [key: string]: IStep };
