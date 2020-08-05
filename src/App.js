import React, { Component } from 'react'
import { Button } from 'antd'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
/**
 * 应用根组件
 */
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
      </div>
      // <BrowserRouter>
      //   <Switch>
      //     <Route path="/login" component={Login}></Route>
      //     <Route path="/" component={Admin}></Route>
      //   </Switch>
      // </BrowserRouter>
    )
  }
}
