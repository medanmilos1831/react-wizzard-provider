import { Form, Button, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useStepClient, useWizzardClient } from '../../Wizzard';

const StepThree = () => {
  const [form] = useForm();
  const wizzardClient = useWizzardClient();
  const step = useStepClient();
  return (
    <Form
      form={form}
      initialValues={step.getData()}
      onFinish={(values) => {
        step.updateStepData((item: any) => {
          if (item === undefined) {
            return values;
          } else {
            return {
              ...item,
              ...values,
            };
          }
        });
        wizzardClient.updateVisibility(['four', 'six']);
        step.nextStep();
      }}
    >
      <Form.Item name="age">
        <Input placeholder="age" />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};

export { StepThree };
