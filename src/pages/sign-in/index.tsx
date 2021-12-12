import React, { FC, useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import '../../assets/styles/sign-form.scss';
import '../../assets/styles/sign-form-responsive.scss';

const SignIn: FC = () => {

  const history = useHistory();

  let isUserExist = false;

  const onFinish = (values: any) => {
    const usersStr = localStorage.getItem('users') as string;
    const users = JSON.parse(usersStr);

    users?.some((el: any) => {
      if (values.login === el.login && values.password === el.password) {
        isUserExist = true;
        values.id = el.id;
        return true;
      } else {
        isUserExist = false;
        return false;
      }
    })

    if (!users || !isUserExist) {
      message.error("User doesn't exist");
    } else {
      const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('token', token);

      const userIndex = users.findIndex((el: any) => el.id === values.id);
      users[userIndex].tokens.push(token);
      localStorage.setItem('users', JSON.stringify(users));

      history.push('/');
      window.location.reload();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="sign-form">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2>Sign in</h2>
        <Form.Item
          label="Login"
          name="login"
          rules={[{ required: true, message: 'Please input your login!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <div className="sign-link">
          <Link to='/sign-up'>Sign up here</Link>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default SignIn;