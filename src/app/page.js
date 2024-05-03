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
      title: "Producto 1",
      description: "Descripción del producto 1",
      image: "/Images/botin1.jpeg",
    },
    {
      title: "Producto 2",
      image: "/Images/botin2.jpeg",
      description: "Descripción del producto 2",
    },
    {
      title: "Producto 3",
      image: "/Images/botin3.jpeg",
      description: "Descripción del producto 3",
    },
    {
      title: "Producto 4",
      description: "Descripción del producto 4",
      image: "/Images/botin1.jpeg",
    },
    {
      title: "Producto 5",
      image: "/Images/botin2.jpeg",
      description: "Descripción del producto 5",
    },
    {
      title: "Producto 6",
      image: "/Images/botin3.jpeg",
      description: "Descripción del producto 6",
    },
    {
      title: "Producto 7",
      image: "/Images/botin2.jpeg",
      description: "Descripción del producto 7",
    },
    {
      title: "Producto 8",
      image: "/Images/botin3.jpeg",
      description: "Descripción del producto 8",
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
