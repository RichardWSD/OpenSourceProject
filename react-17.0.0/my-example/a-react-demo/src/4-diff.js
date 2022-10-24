import React, { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0)

  // 无key
  /* const a = <ul>
    <li>0</li>
    <li>1</li>
  </ul>

  const b = <ul>
    <li>1</li>
    <li>0</li>
  </ul> */
  
  // key值相同type不同把旧fiber删除，并插入新fiber，继续循环
  const a = <ul>
    <li>0</li>
    <li>1</li>
  </ul>

  const b = <ul>
    <div>1</div>
    <li>0</li>
  </ul>

  return (
    <div onClick={() => setNum(num + 1)}>
      { num % 2 ? a : b }
    </div>
  );
}

export default App;
