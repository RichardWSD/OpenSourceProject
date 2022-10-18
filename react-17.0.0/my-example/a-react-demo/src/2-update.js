import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [num, setNum] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={() => setNum(num + 1)}>
          <code title={num}>{num}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
