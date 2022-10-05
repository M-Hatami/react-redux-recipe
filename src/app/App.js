// App.js
import React from "react";
import { AllRecipes } from "../features/allRecipes/AllRecipes.js";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";
import { FavoriteRecipes } from "../features/favoriteRecipes/FavoriteRecipes.js";

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2>غذاهای منتخب</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2>همه غذاها</h2>
        <AllRecipes />
      </section>
    </main>
  );
}
