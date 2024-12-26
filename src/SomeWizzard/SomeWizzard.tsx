import { Row, Col } from 'antd';
import { WizzardProvider } from '../Wizzard';
import { StepFive, StepFour, StepOne, StepThree, StepTwo } from './Steps';
import { WizzFooter } from './WizzFooter';

export const SomeWizzard = () => {
  return (
    <WizzardProvider
      config={{
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
            visible: true,
            data: {
              fname: 'milos',
            },
          },
          {
            step: 'two',
            element() {
              return <StepTwo />;
            },
            visible: true,
          },
          {
            step: 'three',
            element() {
              return <StepThree />;
            },
            visible: true,
          },
          {
            step: 'four',
            element() {
              return <StepFour />;
            },
            visible: false,
          },
          {
            step: 'five',
            element() {
              return <StepFive />;
            },
            visible: false,
          },
        ],
      }}
    >
      {({ ActiveStep, steps, activeStep, changeStep }) => {
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
                {Object.values(steps).map((step) => {
                  return (
                    <>
                      {step.visible ? (
                        <div
                          style={{
                            background:
                              activeStep === step.step ? 'blue' : 'gray',
                          }}
                          onClick={() => {
                            changeStep(step.step);
                          }}
                        >
                          {step.step}
                        </div>
                      ) : null}
                    </>
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
                {steps['four'].visible ? <WizzFooter /> : null}
              </Col>
            </Row>
          </div>
        );
      }}
    </WizzardProvider>
  );
};
