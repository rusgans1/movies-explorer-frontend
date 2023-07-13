import "./HeaderLogged.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function HeaderLogged() {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  function handleClickBurgerMenu() {
    setIsOpenBurgerMenu(true);
  }

  function handleClickCloseButton() {
    setIsOpenBurgerMenu(false);
  }

  return (
    <>
      <button
        className="header__burger-menu"
        onClick={handleClickBurgerMenu}
      ></button>
      <div
        className={`header__overlay ${
          isOpenBurgerMenu ? "header__overlay_active" : ""
        }`}
      ></div>
      <div
        className={`header__container-logged ${
          isOpenBurgerMenu ? "header__container-logged_active" : ""
        }`}
      >
        <button
          className={`header__burger-menu-close-button ${
            isOpenBurgerMenu ? "header__burger-menu-close-button_active" : ""
          }`}
          onClick={handleClickCloseButton}
        ></button>
        <div className="header__links-logged">
          <Link
            to="/"
            className={`header__link-logged ${
              !isOpenBurgerMenu ? "header__link-logged_main" : ""
            }`}
            onClick={handleClickCloseButton}
          >
            Главная
          </Link>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `header__link-logged ${
                isActive ? "header__link-logged_active" : ""
              }`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `header__link-logged ${
                isActive ? "header__link-logged_active" : ""
              }`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `header__profile-logged ${
              isActive ? "header__profile-logged_active" : ""
            }`
          }
        >
          Аккаунт
        </NavLink>
      </div>
    </>
  );
}

export default HeaderLogged;