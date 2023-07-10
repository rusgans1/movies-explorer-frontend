import { Link } from "react-router-dom";
import "./ButtonUnit.css";

function ButtonUnit({ buttonText, paragraphText, linkRoute, linkText }) {
  const isSignIn = linkRoute === "/signin";

  return (
    <div
      className={`button- button-unit_page_${
        isSignIn ? "signin" : "signup"
      }`}
    >
      <button className="button-unit__button">{buttonText}</button>
      <p className="button-unit__text">
        {paragraphText}
        <Link className="button-unit__link" to={`${linkRoute}`}>
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default ButtonUnit;