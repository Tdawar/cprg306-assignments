"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const results = await fetchMealIdeas(ingredient);
      setMeals(results);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Meal Ideas {ingredient && `for "${ingredient}"`}
      </h2>
      {meals.length === 0 ? (
        <p>No meal ideas yet. Select an item.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center gap-3">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 rounded"
              />
              <span>{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
