import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero"
import Footer from "../app/components/Footer";
import Card from "../app/components/Card";

/*
Tarea para proximo jueves:
    Crear una nueva aplicación de NextJS ---
    Crear 4 componentes (Sugeridos: Navbar, Footer, Hero, CardsGrid y Card)
    Importar todos los componentes en la home. 
      Pasarle props a todos los componentes, basado en los datos que puede llevar cada uno.
      Subirlo a un repo de github para entrega
*/

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Footer />
      <Card />
    </main>
  );
}
