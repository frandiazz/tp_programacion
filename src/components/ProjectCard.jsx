import './ProjectCard.css'

function ProjectCard({ titulo, descripcion, estado }) {
  return (
    <article className="proyecto">
      <div className="proyecto__cabecera">
        <h3 className="proyecto__titulo">{titulo}</h3>
        <span className="proyecto__estado">{estado}</span>
      </div>
      <p className="proyecto__descripcion">{descripcion}</p>
    </article>
  )
}

export default ProjectCard
