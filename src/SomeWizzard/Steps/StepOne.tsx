import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useStepClient } from '../../Wizzard';

const StepOne = () => {
  const [form] = useForm();
  const step = useStepClient();
  return (
    <Form
      form={form}
      initialValues={step.getData()}
      onFinish={(values) => {
        step.updateStepData((currentStepData: any) => {
          return {
            ...currentStepData,
            ...values,
          };
        });
        step.nextStep();
      }}
    >
      <Form.Item name="fname">
        <Input placeholder="fname" />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};

export { StepOne };
