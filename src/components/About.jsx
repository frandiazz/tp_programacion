import { useState } from 'react'
import './About.css'

function About() {
  const [mostrarMas, setMostrarMas] = useState(false)

  return (
    <section className="sobre-mi" id="sobre-mi">
      <h2>Sobre mí</h2>
      <p className="sobre-mi__texto">
        Soy Augusto, estudiante de la Tecnicatura en Programación en la UTN
        Facultad Regional Tucumán. Me gusta entender cómo funcionan las cosas
        por dentro y construir interfaces que sean simples de usar.
      </p>

      {mostrarMas && (
        <div className="sobre-mi__extra">
          <p>
            Fuera de la facultad me dedico a practicar programación y a seguir
            cursos de desarrollo web. Mi objetivo es consolidarme como
            desarrollador frontend y, con el tiempo, trabajar también en
            proyectos que combinen frontend y datos.
          </p>
        </div>
      )}

      <button
        type="button"
        className="sobre-mi__boton"
        onClick={() => setMostrarMas(!mostrarMas)}
      >
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
    </section>
  )
}

export default About
