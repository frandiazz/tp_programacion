import './Hero.css'

function Hero({ nombre, profesion, presentacion }) {
  return (
    <section className="hero" id="inicio">
      <p className="hero__saludo">Hola, soy</p>
      <h1 className="hero__nombre">{nombre}</h1>
      <p className="hero__profesion">{profesion}</p>
      <p className="hero__presentacion">{presentacion}</p>
      <a className="hero__cta" href="#proyectos">
        Ver mis proyectos
      </a>
    </section>
  )
}

export default Hero
