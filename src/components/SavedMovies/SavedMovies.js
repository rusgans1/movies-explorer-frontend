import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <section className="saved-movies" aria-label="Сохранненые фильмы">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;