import './App.css';
import { useState } from 'react';

function App() {
  // let name = 'Mohammad';
  const [name, setName] = useState('Mohammad');

  const handleClick = () => {
    // name = 'Webeato';

    setName('Webeato');
    console.log(name);
  }

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
