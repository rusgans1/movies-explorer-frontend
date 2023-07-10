import "./Promo.css";
import logo from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__form">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <h3 className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </h3>
        </div>
        <a
          className="promo__link"
          href="https://github.com/rusgans1"
          target="_blank"
          rel="noreferrer"
        >
          Узнать больше
        </a>
      </div>
      <img className="promo__image" src={logo} alt="Логотип" />
    </section>
  );
}

export default Promo;