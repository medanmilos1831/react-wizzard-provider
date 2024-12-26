import { Form, Button, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useStepClient, useWizzardClient } from '../../Wizzard';

const StepFour = () => {
  const [form] = useForm();
  const wizzardClient = useWizzardClient();
  const client = useStepClient();
  return (
    <Form
      form={form}
      onFinish={(values) => {
        client.nextStep();
        // console.log('values', values);
        // wizzardClient.changeStep('five');
      }}
    >
      <Form.Item name="city">
        <Input placeholder="city" />
      </Form.Item>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};

export { StepFour };
