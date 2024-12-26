import { FactoryStep } from './FactoryStep';
import { IWizzardConfig, stepMapType, stepUpdateType } from './types';

export class WizzardService {
  private stepUpdate: stepUpdateType;
  private stepsMap: stepMapType = {};
  private wizzData: any = undefined;

  constructor(stepUpdate: stepUpdateType, config: IWizzardConfig) {
    this.stepUpdate = stepUpdate;
    const { steps, wizzData } = config;

    steps.forEach((item, index) => {
      let { step } = new FactoryStep(item, index, steps);
      step.nextStep = () => {
        this.changeStep(steps[index + 1].step);
      };
      this.stepsMap[item.step] = step;
    });
    this.wizzData = wizzData;
  }

  getActiveStep(activeStep: string) {
    return this.stepsMap[activeStep].element;
  }

  getStepsMap() {
    return this.stepsMap;
  }

  changeStep(step: string) {
    this.stepUpdate(step);
  }

  updateVisibility(steps: string[]) {
    steps.forEach((item) => {
      this.stepsMap[item].visible = !this.stepsMap[item].visible;
    });
  }

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

  getWizzData() {
    return this.wizzData;
  }
}
