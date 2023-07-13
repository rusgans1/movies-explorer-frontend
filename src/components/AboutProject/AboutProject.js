import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__text-container">
        <div className="about-project__text-column">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text-column">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline-container">
        <div className="about-project__timeline-column about-project__timeline-column_green">
          <p className="about-project__timeline-text about-project__timeline-text_green">
            1 неделя
          </p>
          <p className="about-project__timeline-subtext">Back-end</p>
        </div>
        <div className="about-project__timeline-column about-project__timeline-column_dark">
          <p className="about-project__timeline-text about-project__timeline-text_dark">
            4 недели
          </p>
          <p className="about-project__timeline-subtext">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;