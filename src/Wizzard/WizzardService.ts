import { Step } from './Step';
import { IWizzardConfig, stepMapType, stepUpdateType } from './types';

export class WizzardService {
  private stepUpdate: stepUpdateType;
  private stepsMap: stepMapType = {};
  private wizzData: any = undefined;
  private onStepChange: (values: any) => void;
  private onFinish: (values: any) => void;

  constructor(stepUpdate: stepUpdateType, config: IWizzardConfig) {
    this.onFinish = config.onFinish;
    this.onStepChange = config.onStepChange;
    this.stepUpdate = stepUpdate;
    const { steps, wizzData } = config;

    steps.forEach((item, index) => {
      this.stepsMap[item.step] = new Step(
        item,
        index,
        steps,
        (step) => {
          this.changeStep(step);
        },
        config.active,
        () => {
          this.onFinish(this.getDataByStep());
        }
      );
    });
    this.wizzData = wizzData;
  }

  private getDataByStep() {
    return Object.keys(this.stepsMap).reduce((acc: any, key) => {
      acc[key] = this.stepsMap[key].data;
      return acc;
    }, {});
  }

  getActiveStep(activeStep: string) {
    return this.stepsMap[activeStep].element;
  }

  getStepsMap() {
    return this.stepsMap;
  }

  private _onStepChange(oldValue: string, newValue: string) {
    this.stepsMap[oldValue].isActive = false;
    this.stepsMap[newValue].isActive = true;
    this.onStepChange({
      oldValue,
      newValue,
      steps: this.stepsMap,
    });
  }

  changeStep(step: string) {
    this.stepUpdate((prev: string) => {
      this._onStepChange(prev, step);
      return step;
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
