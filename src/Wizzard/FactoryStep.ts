import { IStep, IStepConfig } from './types';

export class FactoryStep {
  step!: IStep;

  constructor(step: IStepConfig, index: number, steps: IStepConfig[]) {
    this.step = step;
    if (steps.length - 1 === index) {
      this.step.isLast = true;
      this.step.next = undefined;
    } else {
      this.step.isLast = false;
      this.step.next = steps[index + 1].step;
    }
    this.step.updateStepData = (callback: (stepData: any) => void) => {
      this.step.data = callback(this.step.data);
    };
    this.step.getData = () => {
      return this.step.data;
    };
  }
}
