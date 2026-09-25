import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

const proyectos = [
  {
    id: 1,
    titulo: 'Dashboard de gastos',
    descripcion:
      'Aplicación para registrar los gastos del mes y visualizarlos con gráficos, para tener el resumen de las cuentas a un vistazo.',
    estado: 'En desarrollo',
  },
  {
    id: 2,
    titulo: 'Portal inmobiliario',
    descripcion:
      'Sitio para una inmobiliaria con publicación de propiedades, filtros de búsqueda y contacto con el asesor.',
    estado: 'En desarrollo',
  },
]

function Projects() {
  return (
    <section className="proyectos" id="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos__lista">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            estado={proyecto.estado}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
