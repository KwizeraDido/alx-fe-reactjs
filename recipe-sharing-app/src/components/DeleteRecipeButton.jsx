import React from 'react';
import { useRecipeStore } from '../recipeStore'; // Adjust path if necessary
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();
  const navigate = useNavigate();

  const handleDelete = () => {
    // Confirm deletion with the user
    const confirmed = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmed) {
      deleteRecipe(recipeId);
      navigate('/'); // Redirect to the home page or another route after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
