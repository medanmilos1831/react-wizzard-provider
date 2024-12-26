import { Form, Button, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';

const StepFive = () => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <Form.Item name="country">
        <Input placeholder="country" />
      </Form.Item>
      <Button>Submit</Button>
    </Form>
  );
};

export { StepFive };
