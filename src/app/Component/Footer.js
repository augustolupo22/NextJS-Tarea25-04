import Image from "next/image";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-logo">
          <h2>Plato Perfecto</h2>
          <p>Descubre las mejores recetas y cocina como un chef desde casa.</p>
        </div>

        <div class="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">Recetas</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>

        <div class="footer-contacto">
          <h3>Contacto</h3>
          <p>Email: contacto@PlatoPerfecto.com</p>
          <p>Teléfono: +54 11 1234 5678</p>
          <p>Ubicación: Buenos Aires, Argentina</p>
        </div>

        <div class="footer-redes">
          <h3>Síguenos</h3>
          <div class="social-icons">
            <a href="#">
              <Image src="/app/Component/Images/Facebook.png" alt="Facebook" width={32} height={32} />
            </a>
            <a href="#">
              <Image src="/app/Component/Images/instagram.png" alt="Instagram" width={32} height={32} />
            </a>
            <a href="#">
              <Image src="/app/Component/Images/twitter.png" alt="Twitter" width={32} height={32} />
            </a>
            <a href="#">
              <Image src="/app/Component/Images/youtube.png" alt="YouTube" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>

      <div class="footer-copy">
        <p>&copy; 2025 Plato Perfecto. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
