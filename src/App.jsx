import './App.css'
import { useState } from 'react';
import Aparece from './Aparece';
import Izquierda from './Izquierda';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const cambio = (e) => { setInputValue(e.target.value) };
  const animacion = () => { return inputValue >= 100 ? { opacity: 1, transition: ".25s" } : { opacity: 0, transition: ".25s" } }
  const animacion2 = () => { return inputValue <= 0 || inputValue < 100 ? { display: "flex", transition: ".25s" } : { opacity: 0.2, transition: ".25s" } }
  return (
    <div className='todo'>
      <div className='seccion'>
        <input type="number" value={inputValue} onChange={cambio} />
      </div>
      <p style={animacion2()}>Inserta una cantidad mayor a $100 pesos</p>
      <div className='datos'>
        <div className='chetos' style={animacion()}>
          <Izquierda />
          <Aparece dato={inputValue} />
        </div>
      </div>
    </div>
  )
}
