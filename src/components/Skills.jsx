import './Skills.css'

const habilidades = [
  { nombre: 'React', detalle: 'Componentes, props y estado' },
  { nombre: 'JavaScript', detalle: 'ES6+, funciones flecha y arrays' },
  { nombre: 'Vite', detalle: 'Servidor de desarrollo y build' },
  { nombre: 'Git / GitHub', detalle: 'Control de versiones' },
  { nombre: 'HTML5 / CSS3', detalle: 'Flexbox, grid y diseño responsive' },
]

function Skills() {
  return (
    <section className="habilidades" id="habilidades">
      <h2>Habilidades</h2>
      <ul className="habilidades__lista">
        {habilidades.map((habilidad) => (
          <li className="habilidades__item" key={habilidad.nombre}>
            <strong>{habilidad.nombre}</strong>
            <span>{habilidad.detalle}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
