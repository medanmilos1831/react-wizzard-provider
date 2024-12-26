import { Form, Button, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useWizzardClient } from '../../Wizzard';

const StepFour = () => {
  const [form] = useForm();
  const wizzardClient = useWizzardClient();
  return (
    <Form
      form={form}
      onFinish={(values) => {
        console.log('values', values);
        wizzardClient.changeStep('five');
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
