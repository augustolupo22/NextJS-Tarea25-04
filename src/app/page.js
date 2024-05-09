/*Tarea para proximo jueves:
    Crear una nueva aplicación de NextJS ---
    Crear 4 componentes (Sugeridos: Navbar, Footer, Hero, CardsGrid y Card)
    Importar todos los componentes en la home. 
      Pasarle props a todos los componentes, basado en los datos que puede llevar cada uno.
      Subirlo a un repo de github para entrega
*/

import Styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import FetchGrid from "./components/FetchGrid/FetchGrid";


// Navbar
const Home = () => {
  const menuItems = [
    { text: "Inicio", link: "https://www.instagram.com/augusto_lupo/" },
    { text: "Sobre nosotros", link: "https://www.instagram.com/augusto_lupo/" },
    { text: "Contacto", link: "https://www.instagram.com/augusto_lupo/" },
  ];

// Hero
  const heroData = {
    title: "¡BIENVENIDO A MI PÁGINA!",
    description: "Explorá mi portafolio",
  };

// Cards
  const cards = [
    {
      title: "Trabajo 1",
      description: "Descripción del trabajo 1",
      image: "/Images/RetratoCara.jpg",
    },
    {
      title: "Trabajo 2",
      description: "Descripción del trabajo 2",
      image: "/Images/RetratoCara.jpg",
    },
    {
      title: "Trabajo 3",
      description: "Descripción del trabajo 3",
      image: "/Images/RetratoCara.jpg",
    },
    {
      title: "Trabajo 4",
      description: "Descripción del trabajo 4",
      image: "/Images/RetratoCara.jpg",
    },
    {
      title: "Trabajo 5",
      description: "Descripción del trabajo 5",
      image: "/Images/RetratoCara.jpg",
    },
    {
      title: "Trabajo 6",
      description: "Descripción del trabajo 6",
      image: "/Images/RetratoCara.jpg",
    },
    {
      title: "Trabajo 7",
      description: "Descripción del trabajo 7",
      image: "/Images/RetratoCara.jpg",
    },
    {
      title: "Trabajo 8",
      description: "Descripción del trabajo 8",
      image: "/Images/RetratoCara.jpg",
    },
  ];

  // Footer
  const companyName = "AUGUSTO LUPO";

  return (
    <div className={Styles.div}>
      <Navbar menuItems={menuItems} />
      <Hero {...heroData} />
      <CardsGrid cards={cards} />
      <FetchGrid />
      <Footer companyName={companyName} />
      
    </div>
  );
};

export default Home;
