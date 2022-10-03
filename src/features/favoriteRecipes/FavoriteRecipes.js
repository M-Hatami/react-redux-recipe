import React from "react";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
// Import removeRecipe from favoriteRecipesSlice.js
import { removeRecipe } from "./favoriteRecipesSlice.js";

const unfavoriteIconUrl = "../../../img/icons/heart-circle-minus-solid.svg";

export const FavoriteRecipes = (props) => {
  // Extract dispatch and favoriteRecipes from props.
  const { favoriteRecipes, dispatch } = props;

  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe));
  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div id="favorite-recipes" className="recipes-container">
      {props.favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          حذف از محبوب‌ها
        </FavoriteButton>
      </Recipe>
    );
  }
};
