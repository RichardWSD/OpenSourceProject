import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './7-3App异步可中断更新与饥饿问题';
import reportWebVitals from './reportWebVitals';

// fiberRootNode指的是#root
// rootFiber指的是ReactDOM.render返回的fiber节点，这个节点的子fiber节点是App fiber节点
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />)
console.log(ReactDOM, React)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
