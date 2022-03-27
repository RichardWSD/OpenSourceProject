import React from 'react';
import './App.css';

function App() {
  return (
    <ul>
      {Array(3000).fill(0).map((_, i) => <li key={i}>{i}</li>)}
    </ul>
  );
}

export default App;
