import { IStepConfig } from './types';

export class Step {
  step;
  element;
  data;
  next;
  isLast;
  nextStep;
  updateStepData;
  getData;
  isActive;

  constructor(
    step: IStepConfig,
    index: number,
    steps: IStepConfig[],
    callback: (step: string) => void,
    activeStep: string,
    onFinish: () => void
  ) {
    this.step = step.step;
    this.element = step.element;
    this.data = step.data;
    this.isActive = activeStep === step.step;
    if (steps.length - 1 === index) {
      this.isLast = true;
      this.next = undefined;
      this.nextStep = () => {
        onFinish();
      };
    } else {
      this.isLast = false;
      this.next = steps[index + 1].step;
      this.nextStep = () => {
        callback(steps[index + 1].step);
      };
    }
    this.updateStepData = (callback: (stepData: any) => void) => {
      this.data = callback(this.data);
    };
    this.getData = () => {
      return this.data;
    };
  }
}
