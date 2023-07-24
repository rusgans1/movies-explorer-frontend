import "./ErrorRoute.css";
import { useNavigate } from "react-router-dom";

function ErrorRoute({ errorData }) {
  const navigate = useNavigate();

  function handleClickBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <main>
      <section className="error-route">
        <h1 className="error-route__code">{errorData.errorCode}</h1>
        <p className="error-route__message">{errorData.errorMessage}</p>
        <button className="error-route__button" type="button" onClick={handleClickBack}>Назад</button>
      </section>
    </main>
  );
}

export default ErrorRoute;