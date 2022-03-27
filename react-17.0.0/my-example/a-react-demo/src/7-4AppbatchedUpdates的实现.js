import React from "react";

export default class App extends React.Component {
  state = {
    num: 0
  }
  onClick = () => {
    // 多个更新合并成一个
    this.setState({
      num: this.state.num + 1
    })
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    console.log('render~');
    return <p onClick={this.onClick}>{this.state.num}</p>
  }
}