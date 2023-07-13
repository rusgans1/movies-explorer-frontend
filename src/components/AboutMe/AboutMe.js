import photo from "../../images/photo.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className='about-me__title'>Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info-column">
          <div className="about-me__info-content-column">
            <h2 className="about-me__name">Николай</h2>
            <h3 className="about-me__profession">
              Фронтенд-разработчик, 31 год
            </h3>
            <p className="about-me__discription">
              Я родился и живу в Санкт-Петерубрге, закончил ЛТУ. У
              меня есть жена и две собаки. Я люблю слушать музыку, а ещё увлекаюсь
              спортом. С 2014 года работал в компании «ИКЕА». Недавно начал кодить.
              После того, как пройду курс по веб-разработке, думаю начать
              заниматься фриланс-заказами или найти постоянную работы.
            </p>
          </div>
          <a
            className="about-me__git-link"
            href="https://github.com/rusgans1"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" alt="Моя фотография" src={photo} />
      </div>
    </section>
  );
}

export default AboutMe;