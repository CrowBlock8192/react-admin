import React, { Component } from 'react'
import { Row, Col, Form, Input, Radio, Button } from 'antd'
import Captcha from '../../components/captcha'
import { UserOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons'
import './login.less'
import logo from '../../assetes/images/logo.png'

/**
 * 登录组件
 */
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      loginMethod: 0, // 0 使用密码 1 使用动态码
    }
  }
  onRef = (ref) => {
    this.child = ref
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }
  changeLoginMethod = (e) => {
    console.log(e)
    let value = this.state.loginMethod
    switch (value) {
      case 0:
        value = 1
        break
      default:
        value = 0
    }
    this.setState({
      loginMethod: value,
    })
  }
  render() {
    const onFinish = (values) => {
      if (values) {
        console.log('Received values of form: ', values)
      }
    }
    const loginMethod = this.state.loginMethod
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
                maxLength="12"
                placeholder="用户名"
                bordered={false}
              />
            </Form.Item>
            {loginMethod === 0 ? (
              <Form.Item
                className="login-form-item"
                name="password"
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: '请输入您的密码!',
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  maxLength="18"
                  placeholder="登录密码"
                  bordered={false}
                />
              </Form.Item>
            ) : (
              <Form.Item
                className="login-form-item"
                name="dynamicCode"
                rules={[
                  { required: true, message: '请输入您的动态码!' },
                  { pattern: /[0-9]/, message: '动态码只能是数字' },
                ]}
              >
                <Row gutter={8}>
                  <Col span={14}>
                    <Input
                      prefix={
                        <UnlockOutlined className="site-form-item-icon" />
                      }
                      maxLength="6"
                      placeholder="请输入动态验证码"
                      bordered={false}
                    />
                  </Col>
                  <Col span={10}>
                    <Captcha onRef={this.onRef} />
                  </Col>
                </Row>
              </Form.Item>
            )}
            <Form.Item
              className="login-form-item"
              name="remember"
              valuePropName="checked"
            >
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>记住账号</Radio>
                {loginMethod === 0 ? <Radio value={2}>记住密码</Radio> : ''}
              </Radio.Group>
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
              <p className="login-method" onClick={this.changeLoginMethod}>
                {loginMethod === 0 ? '使用手机验证码' : '使用密码登录'}
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
