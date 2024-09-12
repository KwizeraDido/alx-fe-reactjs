// src/components/AddRecipeForm.jsx
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!ingredients) errors.ingredients = 'Ingredients are required';
    if (!steps) errors.steps = 'Steps are required';
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      steps: steps.split('\n'),
    };

    // For now, just log the new recipe
    console.log(newRecipe);

    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-4 md:w-2/3 lg:w-1/2 shadow-lg rounded-lg bg-white">
      <h1 className="text-4xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.title && <p className="text-red-500 mb-2">{errors.title}</p>}
        <div>
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
          />
        </div>
        {errors.ingredients && <p className="text-red-500 mb-2">{errors.ingredients}</p>}
        <div>
          <label className="block text-lg font-semibold mb-2">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
            rows="4"
          />
        </div>
        {errors.steps && <p className="text-red-500 mb-2">{errors.steps}</p>}
        <div>
          <label className="block text-lg font-semibold mb-2">Steps (one per line)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded shadow-sm"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 shadow-md"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
