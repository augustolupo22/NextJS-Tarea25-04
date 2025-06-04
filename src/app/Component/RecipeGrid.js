"use client";

import { useEffect, useState } from "react";

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try{
      const API_URL = "https://dummyjson.com/recipes?limit=20&skip=0";
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data.recipes);
      setLoading(false);
      } catch (error) {
        console.log("mi error fue:", error);
        setError(true)
      };
    };

    fetchRecipes();
  }, []);

  const verReceta = (id) => {
    window.location.href = `/ver-mas/${id}`;
  };

  return (
    <div className="recetas_grid">
      {!loading && 
      recipes.map((recipe) => (
        <div className="receta" key={recipe.id}>
          <h3>{recipe.name}</h3>
          <img src={recipe.image} alt={recipe.name} width="200" />
          <button onClick={() => verReceta(recipe.id)}>Ver más</button>
        </div>
        ))}
        {loading && "Cargando..."}
    </div>
  );
};

export default RecipeGrid;
