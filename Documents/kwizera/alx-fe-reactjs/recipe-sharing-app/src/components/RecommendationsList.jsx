import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore(state => ({
    recommendations: state.recommendations,
    generateRecommendations: state.generateRecommendations,
  }));

  useEffect(() => {
    generateRecommendations(); // Generate recommendations when the component mounts
  }, [generateRecommendations]);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Additional details can be added here */}
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
