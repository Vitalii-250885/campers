import { NavLink } from "react-router-dom";

import css from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => `${isActive && css.active} ${css.link}`}>
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => `${isActive && css.active} ${css.link}`}>
        Catalog
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => `${isActive && css.active} ${css.link}`}>
        Favorites
      </NavLink>
    </nav>
  );
};

export default Nav;
