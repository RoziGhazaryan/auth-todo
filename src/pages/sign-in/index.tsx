import { FC } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import useSignIn from "./useSignIn";
import { IValues } from "../../models/IValues";
import "../../assets/styles/sign-form.scss";
import "../../assets/styles/sign-form-responsive.scss";

const SignIn: FC = () => {
  const {
    onFinish,
  }: {
    onFinish: (values: IValues) => void;
  } = useSignIn();

  return (
    <div className="sign-form d_flex a_items_center j_content_center">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2>Sign in</h2>
        <Form.Item
          label="Login"
          name="login"
          rules={[{ required: true, message: "Please input your login!" }]}
        >
          <Input autoComplete="on" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password autoComplete="on" />
        </Form.Item>
        <div className="sign-link">
          <Link to="/sign-up">Sign up here</Link>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SignIn;
