import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import Navbar from "../components/navbar";
import Hero from '../components/Hero';
import Card from '../components/Card';
import Footer from '../components/Footer';

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
    </main>
  );
}
