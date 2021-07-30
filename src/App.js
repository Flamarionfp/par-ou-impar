import react, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [number, setNumber] = useState(1)
  const [status, setStatus] = useState('IMPAR')

  function parImpar(n) {
    if (n % 2 === 0) {
      return 'PAR'
    } else {
      return 'IMPAR'
    }
  }

  useEffect(() => {
    setStatus(parImpar(number))
  }, [number])

  return (
    <div>
      <div className="center" id="changeData">
        <span className="texto">{number}</span>
        <span className="texto red">{status}</span>
      </div>

      <div className="center" id="inputContainer">
        <input
          onChange={e => setNumber(e.target.value)}
          className="input"
          type="number">
        </input>
      </div>

    </div>
  );
}

export default App;
