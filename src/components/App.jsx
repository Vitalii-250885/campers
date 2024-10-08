import { Route, Routes } from "react-router-dom";

import Favorites from "../pages/favoritesPage/FavoritesPage";
import HomePage from "../pages/homePage/HomePage";
import CatalogPage from "../pages/catalogPage/CatalogPage";
import { Layout } from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
