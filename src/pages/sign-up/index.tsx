import { FC } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import useSignUp from "./useSignUp";
import "../../assets/styles/sign-form.scss";
import "../../assets/styles/sign-form-responsive.scss";

const SignUp: FC = () => {
  const { onFinish }: { onFinish: (values: object) => void } = useSignUp();

  return (
    <div className="sign-form d_flex a_items_center j_content_center">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <h2>Sign up</h2>
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
          rules={[{ required: true, message: "Please set your password!" }]}
        >
          <Input.Password autoComplete="on" />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password autoComplete="on" />
        </Form.Item>
        <div className="sign-link">
          <Link to="/sign-in">Already have an account?</Link>
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
export default SignUp;
