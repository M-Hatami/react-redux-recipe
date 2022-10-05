import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadData, selectFilteredAllRecipes } from "./allRecipesSlice";
import { addRecipe } from "../favoriteRecipes/favoriteRecipesSlice.js";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";

const favoriteIconURL = "../../../img/icons/heart-circle-plus-solid.svg";

export const AllRecipes = () => {
  const allRecipes = useSelector(selectFilteredAllRecipes);
  // Implement dispatch variable below.
  const dispatch = useDispatch();

  const onFirstRender = () => {
    dispatch(loadData());
  };
  useEffect(onFirstRender, []);

  const onAddRecipeHandler = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            افزودن به منتخبین
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};
