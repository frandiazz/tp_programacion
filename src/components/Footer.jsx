import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <h2 className="footer__titulo">Contacto</h2>
      <div className="footer__enlaces">
        <a href="https://github.com/frandiazz" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/augusto-francisco-diaz-186359403"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:frandiazzz14@gmail.com">Email</a>
      </div>
      <p className="footer__nota">
        Programación 4 — TP1 — React · UTN Facultad Regional Tucumán
      </p>
    </footer>
  )
}

export default Footer
