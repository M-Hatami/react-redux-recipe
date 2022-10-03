import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice.js";
import { loadData } from "./allRecipesSlice";

import React, { useEffect } from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const favoriteIconURL = "../../../img/icons/heart-circle-plus-solid.svg";

export const AllRecipes = (props) => {
  const { allRecipes, dispatch } = props;

  const onFirstRender = () => {
    dispatch(loadData());
  };
  useEffect(onFirstRender, []);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div id="all-recipes" className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            افزودن به محبوبها
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
