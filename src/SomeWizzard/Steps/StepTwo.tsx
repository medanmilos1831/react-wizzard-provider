import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useStepClient } from '../../Wizzard';

const StepTwo = () => {
  const [form] = useForm();
  const step = useStepClient();

  return (
    <Form
      initialValues={step.getData()}
      form={form}
      onFinish={(values) => {
        step.updateStepData(() => {
          return values;
        });
        step.nextStep();
      }}
    >
      <Form.Item name="lname">
        <Input placeholder="lname" />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};

export { StepTwo };
