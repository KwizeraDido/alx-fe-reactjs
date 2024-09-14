import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Ensure the path is correct

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the route
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the ID from the URL
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]); // Dependency array to run the effect when the id changes

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      {/* Apply shadow here to the image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover mb-4 shadow-lg"
      />

      <div className="shadow-lg rounded-lg p-4 bg-white">
        <p className="text-lg mb-4">{recipe.summary}</p>

        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
        {recipe.ingredients && recipe.ingredients.length > 0 ? (
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        ) : (
          <p>No ingredients available.</p>
        )}

        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        {recipe.instructions ? (
          <p>{recipe.instructions}</p>
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
