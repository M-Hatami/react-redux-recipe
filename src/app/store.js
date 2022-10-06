import { configureStore } from "@reduxjs/toolkit";
import { favoriteRecipesSlice } from "../features/favoriteRecipes/favoriteRecipesSlice.js";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice.js";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice.js";

export const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesSlice.reducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer,
  },
});
