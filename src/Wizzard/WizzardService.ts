import { Step } from './Step';
import { IWizzardConfig, stepMapType, stepUpdateType } from './types';

export class WizzardService {
  private stepUpdate: stepUpdateType;
  private stepsMap: stepMapType = {};
  private wizzData: any = undefined;

  constructor(stepUpdate: stepUpdateType, config: IWizzardConfig) {
    this.stepUpdate = stepUpdate;
    const { steps, wizzData } = config;

    steps.forEach((item, index) => {
      this.stepsMap[item.step] = new Step(
        item,
        index,
        steps,
        this.changeStep.bind(this)
      );
    });
    this.wizzData = wizzData;
    console.log('THIS', this);
  }

  getActiveStep(activeStep: string) {
    return this.stepsMap[activeStep].element;
  }

  getStepsMap() {
    return this.stepsMap;
  }

  changeStep(step: string) {
    this.stepUpdate(step);
    console.log('STEPS MAP', this.stepsMap);
  }

  updateVisibility(steps: string[]) {
    steps.forEach((item) => {
      this.stepsMap[item].visible = !this.stepsMap[item].visible;
    });
    console.log('STEPS MAP', this.stepsMap);
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
