import iconLink from "../../images/link-icon.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/rusgans1/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <img className="portfolio__link-icon" src={iconLink} alt="Стрелка" />
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/rusgans1/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <img className="portfolio__link-icon" src={iconLink} alt="Стрелка" />
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/rusgans1/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <img className="portfolio__link-icon" src={iconLink} alt="Стрелка" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;