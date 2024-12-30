import { Col, Row } from 'antd';
import { WizzardProvider } from '../Wizzard';
import { StepOne, StepThree, StepTwo } from './Steps';

export const SomeWizzard = () => {
  return (
    <WizzardProvider
      config={{
        onFinish(values: any) {
          console.log('values', values);
        },
        onStepChange(values: any) {
          console.log('onStepChange', values);
        },
        active: 'one',
        wizzData: {
          isEditMode: true,
          wizzEnv: 'SN',
        },
        steps: [
          {
            step: 'one',
            element() {
              return <StepOne />;
            },
            data: {
              fname: 'milos',
            },
          },
          {
            step: 'two',
            element() {
              return <StepTwo />;
            },
          },
          {
            step: 'three',
            element() {
              return <StepThree />;
            },
          },
        ],
      }}
    >
      {({ ActiveStep, steps, changeStep }) => {
        return (
          <div
            style={{
              height: '100%',
              width: '100%',
              background: 'blue',
            }}
          >
            <Row
              style={{
                height: '100%',
              }}
            >
              <Col
                span={8}
                style={{
                  background: 'yellow',
                  height: '100%',
                }}
              >
                {Object.values(steps).map((step, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        background: step.isActive ? 'blue' : 'gray',
                      }}
                      onClick={() => {
                        changeStep(step.step);
                      }}
                    >
                      {step.step}
                    </div>
                  );
                })}
              </Col>
              <Col
                style={{
                  background: 'green',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                span={16}
              >
                <div
                  style={{
                    flexGrow: 1,
                    background: 'red',
                  }}
                >
                  <ActiveStep />
                </div>
              </Col>
            </Row>
          </div>
        );
      }}
    </WizzardProvider>
  );
};
