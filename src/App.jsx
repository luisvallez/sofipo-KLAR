import './App.css'
import { useState } from 'react';
import Aparece from './Aparece';
import Izquierda from './Izquierda';

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const cambio = (e) => { setInputValue(e.target.value) };
  const animacion = () => { return inputValue > 99 && inputValue <= 500000 ? { opacity: 1, transition: ".2s" } : { opacity: 0, transition: ".2s" } }
  const animacion2 = () => { return (inputValue <= 0 || inputValue < 100 || inputValue > 500000) ? { display: "flex", transition: ".2s" } : { opacity: 0.2, transition: ".2s" } }
  return (
    <div className='todo'>
      <div className='seccion'>
        <input className='input' type="number" value={inputValue} onChange={cambio} />
      </div>
      <p style={animacion2()}>Inserta una cantidad mayor a $99 pesos</p>
      <div className='datos'>
        <div className='chetos' style={animacion()}>
          <div className='dentro'>
            <Izquierda />
            <Aparece dato={inputValue} />
          </div>
        </div>
      </div>
    </div>
  )
}
