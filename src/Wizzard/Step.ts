import { IStepConfig } from './types';

export class Step {
  step;
  element;
  visible;
  data;
  next;
  isLast;
  nextStep;
  updateStepData;
  getData;

  constructor(
    step: IStepConfig,
    index: number,
    steps: IStepConfig[],
    callback: (step: string) => void
  ) {
    this.step = step.step;
    this.element = step.element;
    this.visible = step.visible;
    this.data = step.data;
    if (steps.length - 1 === index) {
      this.isLast = true;
      this.next = undefined;
    } else {
      if (this.visible) {
        this.isLast = false;
        this.next = steps[index + 1].step;
        this.nextStep = () => {
          callback(steps[index + 1].step);
        };
      } else {
        this.isLast = undefined;
        this.next = undefined;
        this.nextStep = undefined;
      }
    }
    this.updateStepData = (callback: (stepData: any) => void) => {
      this.data = callback(this.data);
    };
    this.getData = () => {
      return this.data;
    };
  }
}
