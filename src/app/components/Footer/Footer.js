import styles from "./Footer.module.css"

const Footer = () => {
    return (
      <footer className={styles["footer"]}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-section"]}>
            <h3>Enlaces</h3>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Sobre nosotros</a></li>
              <li><a href="/contact">Contacto</a></li>
            </ul>
          </div>
          <div className={styles["footer-section"]}>
            <h3>Contacto</h3>
            <p className={styles["p"]}>Email: augustolupo030422@gmail.com</p>
            <p className={styles["p"]}>Teléfono: 2346-635561</p>
          </div>
          <div className={styles["footer-section"]}>
            <h3>Redes Sociales</h3>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
        <p className={styles["footer-copyright"]}>Derechos de autor © 2024 Augusto Lupo</p>
      </footer>
    );
  }
  
  export default Footer;
