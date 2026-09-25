import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const misDatos = {
    nombre: 'Augusto Francisco Díaz',
    profesion: 'Estudiante de Tecnicatura en Programación — UTN FRT',
    presentacion:
      'Estoy cursando la carrera en la Facultad Regional Tucumán y me interesa el desarrollo de interfaces. Este portfolio es mi primer proyecto con React.',
  }

  return (
    <>
      <Header />
      <Hero
        nombre={misDatos.nombre}
        profesion={misDatos.profesion}
        presentacion={misDatos.presentacion}
      />
    </>
  )
}

export default App
