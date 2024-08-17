import Nav from "../nav/Nav";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <h1>Campers in Ukraine</h1>
      <Nav />
    </header>
  );
};

export default Header;
