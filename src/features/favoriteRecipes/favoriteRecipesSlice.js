// For this exercise only, the favoriteRecipes slice will contain the following initial recipes.
const initialState = [
  { id: 0, name: "چلو جوجه کباب", img: "img/چلو-جوجه-کباب.jpg" },
  { id: 1, name: "پلومرغ", img: "img/پلومرغ.jpg" },
  { id: 2, name: "آش شله قلمکار", img: "img/آش-شله-قلمکار.jpg" },
];
export const favoriteRecipesReducer = (
  favoriteRecipes = initialState,
  action
) => {
  switch (action.type) {
    case "favoriteRecipes/addRecipe":
      return [...favoriteRecipes, action.payload];
    case "favoriteRecipes/removeRecipe":
      return favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    default:
      return favoriteRecipes;
  }
};

export function addRecipe(recipe) {
  return {
    type: "favoriteRecipes/addRecipe",
    payload: recipe,
  };
}

export function removeRecipe(recipe) {
  return {
    type: "favoriteRecipes/removeRecipe",
    payload: recipe,
  };
}
