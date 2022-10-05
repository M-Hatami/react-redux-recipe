import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeRecipe,
  selectFilteredFavoriteRecipes,
} from "./favoriteRecipesSlice.js";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl = "../../../img/icons/heart-circle-minus-solid.svg";

export const FavoriteRecipes = () => {
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch the action below.
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
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
          حذف منتخب
        </FavoriteButton>
      </Recipe>
    );
  }
};
