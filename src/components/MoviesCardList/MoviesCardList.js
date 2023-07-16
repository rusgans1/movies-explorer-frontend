import "./MoviesCardList.css";
import { useEffect, useState } from "react";
import { MOVIES_RENDER_CONFIG } from "../../utils/constans";
import { useResize } from "../../hooks/useResize";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  filteredMovies,
  onSavedClick,
  onDeleteClick,
  savedMovies,
  isSaveMovies,
}) {
  const isMobileWidth = useResize();
  const [filmCards, setFilmCards] = useState();
  const [isMoreButton, setIsMoreButton] = useState(false);
  const [renderCount, setRenderCount] = useState(
    isMobileWidth
      ? MOVIES_RENDER_CONFIG.mobileWidth
      : MOVIES_RENDER_CONFIG.desktopWidth
  );

  useEffect(() => {
    function renderMovies() {
      const moviesList = filteredMovies.map((movie, index) => {
        const isLiked = savedMovies.some((savedMovie) => {
          return movie.id === savedMovie.movieId;
        });

        if (index < renderCount) {
          return (
            <MoviesCard
              film={movie}
              key={movie.id}
              onSavedClick={onSavedClick}
              onDeleteClick={onDeleteClick}
              isLiked={isLiked}
            />
          );
        }
      });

      return moviesList;
    }

    function renderSaveMovies() {
      const movieList = filteredMovies.map((movie) => {
        return (
          <MoviesCard
            film={movie}
            key={movie.movieId}
            onDeleteClick={onDeleteClick}
          />
        );
      });
      return movieList;
    }

    if (isSaveMovies) {
      setFilmCards(renderSaveMovies());
    } else {
      setFilmCards(renderMovies());
    }
  }, [
    filteredMovies,
    isMobileWidth,
    isSaveMovies,
    onDeleteClick,
    onSavedClick,
    renderCount,
    savedMovies,
  ]);

  function handleMoreButton() {
    setRenderCount(
      (data) =>
        data +
        (isMobileWidth
          ? MOVIES_RENDER_CONFIG.moreMobileWidthFilm
          : MOVIES_RENDER_CONFIG.moreDesktopWidthFilm)
    );
  }

  useEffect(() => {
    setIsMoreButton(filteredMovies.length > renderCount);
  }, [renderCount, filteredMovies]);

  return (
    <section className="movies-list" aria-label="Список фильмов">
      <div className="movies-list__cards">{filmCards}</div>
      <div className="movies-list__button-more-container">
        {!isSaveMovies && isMoreButton && (
          <button
            className="movies-list__button-more"
            type="button"
            onClick={handleMoreButton}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;