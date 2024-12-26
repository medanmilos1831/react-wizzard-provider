import { Form, Button, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';

const StepSeven = () => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <Form.Item name="seven">
        <Input placeholder="seven" />
      </Form.Item>
      <Button>Submit</Button>
    </Form>
  );
};

export { StepSeven };
