import React, { FC } from "react";
import { Button, Form, Input } from "antd";
import '../../styles/sign-form.scss';
import { Link } from "react-router-dom";

const SignUp: FC = () => {
   const onFinish = (values: any) => {
      console.log('Success:', values);
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
            <Form.Item
               label="Email"
               name="email"
               rules={[{ required: true, message: 'Please input your email!' }]}
            >
               <Input />
            </Form.Item>

            <Form.Item
               label="Username"
               name="username"
               rules={[{ required: true, message: 'Please input your username!' }]}
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


            <Form.Item name="signIn">
               <Link to='/sign-in'>Already have an account?</Link>
            </Form.Item>

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