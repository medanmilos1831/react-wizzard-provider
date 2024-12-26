import { Row, Col } from 'antd';
import { WizzardProvider } from '../Wizzard';
import {
  StepFive,
  StepFour,
  StepOne,
  StepSeven,
  StepSix,
  StepThree,
  StepTwo,
} from './Steps';
import { WizzFooter } from './WizzFooter';
import React from 'react';

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
          {
            step: 'six',
            element() {
              return <StepSix />;
            },
            visible: false,
          },
          {
            step: 'seven',
            element() {
              return <StepSeven />;
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
                {Object.values(steps).map((step, index) => {
                  return (
                    <React.Fragment key={index}>
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
                    </React.Fragment>
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
