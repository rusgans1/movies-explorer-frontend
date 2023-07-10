import { Link } from "react-router-dom";
import "./ErrorRoute.css";

function ErrorRoute() {
  return (
    <main>
      <section className="error-route">
        <h1 className="error-route__code">404</h1>
        <p className="error-route__message">Страница не найдена</p>
        <Link className="error-route__link" to="/">Назад</Link>
      </section>
    </main>
  );
}

export default ErrorRoute;