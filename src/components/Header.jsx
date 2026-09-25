import './Header.css'

function Header() {
  return (
    <header className="header">
      <a className="header__nombre" href="#inicio">
        Augusto Díaz
      </a>
      <nav className="header__nav">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}

export default Header
