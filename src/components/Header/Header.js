import "./Header.css";
import { useLocation, Link } from "react-router-dom";
import HeaderLogged from "../HeaderLogged/HeaderLogged";
import HeaderMain from "../HeaderMain/HeaderMain";
import logo from "../../images/header-logo.svg";

function Header() {
  let location = useLocation();

  const isMain = location.pathname === "/";
  const isSignUp = location.pathname === "/signup";
  const isSignIn = location.pathname === "/signin";
  const isAuth = isSignIn || isSignUp;

  return (
    <header
      className={`header ${isMain ? "header_main" : ""} ${
        !isMain && !isAuth ? "header_logged" : ""
      } ${isAuth ? "header_sign" : ""}`}
    >
      <Link to="/">
        <img className="header__logo" alt="Логотип" src={logo} />
      </Link>
      {isAuth ? (
        <h2 className="header__title-auth">
          {isSignIn ? "Рады видеть!" : "Добро пожаловать!"}
        </h2>
      ) : !isMain ? (
        <HeaderLogged />
      ) : (
        <HeaderMain />
      )}
    </header>
  );
}

export default Header;