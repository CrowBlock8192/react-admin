// import {Component} from 'react';
import React from 'react'
import { Button } from 'antd'

class Captcha extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 60,
      isLock: true,
    }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  countDown() {
    const { count } = this.state
    if (count === 1) {
      this.setState({
        count: 60,
        isLock: true,
      })
    } else {
      this.setState({
        count: count - 1,
        isLock: false,
      })
      setTimeout(this.countDown.bind(this), 1000)
    }
  }

  handleClick = () => {
    // const {sendMsg} = this.props;
    const { isLock } = this.state
    if (!isLock) {
      return
    }
    this.countDown()
  }

  render() {
    return (
      <Button
        block
        onClick={() => this.handleClick()}
        type="primary"
        disabled={!this.state.isLock}
      >
        {this.state.isLock ? '获取验证码' : `${this.state.count} 秒后重发`}
      </Button>
    )
  }
}

export default Captcha
