import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore'; // Adjust path if necessary
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');
  const { updateRecipe } = useRecipeStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    if (!title || !description) {
      // Add validation or error handling as needed
      return;
    }

    const updatedRecipe = {
      ...recipe,
      title,
      description
    };

    updateRecipe(updatedRecipe);
    navigate(`/recipes/${recipeId}`); // Navigate to the recipe details page or elsewhere
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
