import { useState, useEffect } from 'react'
import './App.css';

function App() {

  //Use State
  const [number, setNumber] = useState(1)
  const [status, setStatus] = useState('IMPAR')
  const [displayMsg, setDispayMsg] = useState('')

  function parImpar(n) {
    if (n == '') {
      setDispayMsg('flex')
    } else if (n % 2 === 0) {
      setDispayMsg('none')
      return 'PAR'
    } else {
      setDispayMsg('none')
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

      <div
        className="center"
        id="msgContainer"
        style={{
          display: displayMsg
        }}
      >
        <span id="msg">Informe um número</span>
      </div>
    </div>
  );
}

export default App;
