const Footer = () => {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Enlaces</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Acerca de</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Email: info@empresa.com</p>
            <p>Teléfono: 123-456-789</p>
          </div>
          <div className="footer-section">
            <h3>Redes Sociales</h3>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright">Derechos de autor © 2024 Tu Empresa</p>
      </footer>
    );
  }
  
  export default Footer;