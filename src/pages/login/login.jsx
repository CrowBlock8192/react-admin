import React, { Component } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import Captcha from '../../components/captcha'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.less'
import logo from '../../assetes/images/logo.png'

/**
 * 登录组件
 */
export default class Login extends Component {
  onRef = (ref) => {
    this.child = ref
  }
  render() {
    const onFinish = (values) => {
      if (values) {
        console.log('Received values of form: ', values)
      }
    }
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React 后台管理项目</h1>
        </header>
        <div className="login-content">
          <h2>客渠邦平台</h2>
          <h6>互联网+实体解决方案</h6>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              className="login-form-item"
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '请输入您的用户名!',
                },
                { min: 4, message: '用户名至少4位' },
                { max: 12, message: '用户名至多12位' },
                {
                  pattern: /^[a-zA-Z0-9_]+$/,
                  message: '用户名必须是英文数字或下划线组成',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
                bordered={false}
              />
            </Form.Item>
            <Form.Item
              className="login-form-item"
              name="password"
              rules={[{ required: true, message: '请输入您的密码!' }]}
            >
              <Row gutter={8}>
                <Col span={14}>
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                    bordered={false}
                  />
                </Col>
                <Col span={10}>
                  <Captcha onRef={this.onRef} />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item className="login-form-item">
              <Button
                block
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
