"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/ver-mas/ver-mas.module.css";

const VerMas = () => {
  const searchParams = useSearchParams();
  const recetaId = searchParams.get("id");

  const [receta, setReceta] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReceta = async () => {
      if (!recetaId) {
        setError(true);
        return;
      }

      try {
        const API_URL = `https://dummyjson.com/recipes/${recetaId}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        setReceta(data);
      } catch (err) {
        setError(true);
        console.log("Error al cargar la receta:", err);
      }
    };

    fetchReceta();
  }, [recetaId]);

  const volverAInicio = () => {
    window.location.href = "/";
  };

  if (error) return <p>Error al cargar la receta.</p>;
  if (!receta) return <p className={styles.mensajeCentrado}>Cargando...</p>
;

  return (
    <div className={styles.detalle}>
      <h1 className={styles.nombre}>{receta.name}</h1>
      <img className={styles["receta-imagen"]} src={receta.image} alt={receta.name} width="300" />

      <h3 className={styles["receta-nombre"]}>Ingredientes</h3>
      <ul className={styles["receta-ingredientes"]}>
        {receta.ingredients.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>

      <h3 className={styles["receta-nombre"]}>Instrucciones</h3>
      <p className={styles["receta-pasos"]}>{receta.instructions.join(" ")}</p>

      <button className={styles["btn-volver"]} onClick={volverAInicio}>Volver al inicio</button>
    </div>
  );
};

export default VerMas;
