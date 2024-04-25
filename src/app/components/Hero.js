import Image from "next/image";

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a nuestra aplicación</h1>
          <p>Descubre todo lo que nuestra aplicación puede ofrecerte.</p>
          <button>Iniciar sesión</button>
          <button>Registrarse</button>
        </div>
      </section>
    );
  }
  
  export default Hero;