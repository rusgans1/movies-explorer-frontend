import "./HeaderMain.css";
import { Link } from "react-router-dom";

function HeaderMain() {
  return (
    <div className="header__bar">
      <Link className="header__signup-link" to="/signup">
        Регистрация
      </Link>
      <Link className="header__signin-link" to="/signin">
        Войти
      </Link>
    </div>
  );
}

export default HeaderMain;