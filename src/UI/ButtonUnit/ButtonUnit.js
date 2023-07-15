import "./ButtonUnit.css";
import { Link } from "react-router-dom";

function ButtonUnit({
  linkRoute,
  errorMessage,
  buttonOnClick,
  isButtonActive,
  buttonText,
  paragraphText,
  linkText
}) {
  const isSignIn = linkRoute === "/signin";

  return (
    <div
      className={`button- button-unit_page_${
        isSignIn ? "signin" : "signup"
      }`}
    >
      {errorMessage !== "" && (
        <p className="button-unit__error">{errorMessage}</p>
      )}
      <button
        className="button-unit__button"
        type="submit"
        onClick={buttonOnClick}
        disabled={isButtonActive ? "" : true}
      >
        {buttonText}
      </button>
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