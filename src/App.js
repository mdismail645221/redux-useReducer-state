import { useState } from 'react';
import './App.css';
import Child from './components/Child';
import Perent from './components/Prerent/Perent';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Perent count={count}></Perent>
      <Child count={count} setCount={setCount}></Child>
    </div>
  );
}

export default App;
