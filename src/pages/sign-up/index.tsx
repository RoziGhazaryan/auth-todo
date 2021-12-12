import React, { FC, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { Link, useHistory } from "react-router-dom";
import '../../assets/styles/sign-form.scss';

const SignUp: FC = () => {

   const history = useHistory();

   const onFinish = (values: any) => {
      console.log('Success:', values);
      const usersStr = localStorage.getItem('users') as string;
      const userIdStr = localStorage.getItem('userId') as string;
      const users = JSON.parse(usersStr);
      const userId = JSON.parse(userIdStr) + 1;

      users.push({ id: userId, ...values, todoId: 0, todo: [] });

      localStorage.setItem('userId', userId);
      localStorage.setItem('users', JSON.stringify(users));

      history.push('/sign-in');
   };

   const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
   };

   useEffect(() => {
      const users = localStorage.getItem('users');
      if (!users) {
         localStorage.setItem('users', '[]');
         localStorage.setItem('userId', '0');
      }
   }, [])

   return (
      <div className="sign-form">
         <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >
            <h2>Sign up</h2>
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
               rules={[{ required: true, message: 'Please set your password!' }]}
            >
               <Input.Password />
            </Form.Item>

            <Form.Item
               label="Confirm Password"
               name="confirmPassword"
               rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                     validator(_, value) {
                       if (!value || getFieldValue('password') === value) {
                         return Promise.resolve();
                       }
                       return Promise.reject(new Error('The two passwords that you entered do not match!'));
                     },
                   }),
               ]}
            >
               <Input.Password />
            </Form.Item>

            <div className="sign-link">
               <Link to='/sign-in'>Already have an account?</Link>
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
export default SignUp;