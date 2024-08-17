import { Route, Routes } from "react-router-dom";

import Favorites from "../pages/favoritesPage/FavoritesPage";
import HomePage from "../pages/homePage/HomePage";
import CatalogPage from "../pages/catalogPage/CatalogPage";
import { Layout } from "./Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
