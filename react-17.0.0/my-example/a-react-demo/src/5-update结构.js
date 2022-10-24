import React from "react";

export default class App extends React.Component {
  state = {
    num: 0
  }
  onClick = () => {
    // 多个更新合并成一个
    this.setState((state) => {
        this.setState((state) => {
          return {
            num: state.num + 1
          }
        })
        return {
          num: state.num + 1
        }
    })
  }
  render() {
    return <p onClick={this.onClick}>{this.state.num}</p>
  }
}