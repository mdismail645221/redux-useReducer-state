import { createContext, useState } from 'react';
import './App.css';
import Child from './components/Child';
import Perent from './components/Prerent/Perent';


export const COUNTER_CONTEXT = createContext()

function App() {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount
  }
  return (
    <div className="App">
      <COUNTER_CONTEXT.Provider value={value}>
        <Perent></Perent>
        <Child></Child>
      </COUNTER_CONTEXT.Provider>
    </div>
  );
}

export default App;
