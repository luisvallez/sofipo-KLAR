import { useState } from "react";

export default function datosExtra({ dato }) {
  const [inputValue, setInputValue] = useState();
  const cambio = (e) => { setInputValue(e.target.value) };




  function calcularGanancias(weeks) {
    const inversionInicial = dato;
    const factorMultiplicacion = 0.0021;
    let inversionActual = inversionInicial;
    let gananciasTotales = 0;

    for (let semana = 1; semana <= weeks; semana++) {
      let gananciaSemana = inversionActual * factorMultiplicacion;
      gananciasTotales += gananciaSemana + inversionInicial;
      console.log(inversionActual, "pipi")
      inversionActual += gananciaSemana + inversionInicial;

    }

    return gananciasTotales.toFixed(2); // Redondeamos a dos decimales
  }

  const semanasInversion = inputValue// Puedes cambiar este valor según tus necesidades
  const gananciasTotales = calcularGanancias(semanasInversion);

  return (
    <>
      si inviertes: {dato} + ganancias por <input className="input2" type="number" value={inputValue} />
      tus ganancias serian de: {gananciasTotales}
    </>
  )
}