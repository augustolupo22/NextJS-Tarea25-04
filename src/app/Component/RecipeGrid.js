"use client";

import { useEffect, useState } from "react";
import parseData from "@/data/recipes"; //AGREGADO EN CLASE

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const API_URL = "https://dummyjson.com/recipes?limit=20&skip=0";
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data.recipes);
    };

    fetchRecipes();
  }, []);

  const verReceta = (id) => {
    window.location.href = `recipe.html?id=${id}`;
  };

  return (
    <div className="recetas_grid">
      {recipes.map((recipe) => (
        <div className="receta" key={recipe.id}>
          <h3>{recipe.name}</h3>
          <img src={recipe.image} alt={recipe.name} width="200" />
          <button onClick={() => verReceta(recipe.id)}>Ver más</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;
