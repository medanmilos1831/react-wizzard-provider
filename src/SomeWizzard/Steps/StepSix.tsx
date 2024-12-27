import { Form, Button, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';

const StepSix = () => {
  const [form] = useForm();
  return (
    <Form
      form={form}
      onFinish={(values) => {
        console.log('values', values);
      }}
    >
      <Form.Item name="six">
        <Input placeholder="six" />
      </Form.Item>
      <Button>Submit</Button>
    </Form>
  );
};

export { StepSix };
