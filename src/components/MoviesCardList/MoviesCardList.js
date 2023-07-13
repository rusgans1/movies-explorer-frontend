import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies-list" aria-label="Список фильмов">
      <div className="movies-list__cards">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className="movies-list__button-more-container">
        <button className="movies-list__button-more">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;