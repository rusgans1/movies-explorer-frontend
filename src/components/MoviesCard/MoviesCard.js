import "./MoviesCard.css";
import { Link, useLocation } from "react-router-dom";
import unlikeIcon from "../../images/unlike-icon.svg";
import likeIcon from "../../images/like-icon.svg";
import removeIcon from "../../images/movie-remove-icon.svg";

function MoviesCard({ film, onSavedClick, onDeleteClick, isLiked }) {

  let location = useLocation();
  const isMoviesLocation = location.pathname === "/movies";

  function handleLikeClick(e) {
    e.preventDefault();
    if (isLiked) {
      onDeleteClick(film);
    } else {
      onSavedClick(film);
    }
  }

  function handleDeleteClick(e) {
    e.preventDefault();
    onDeleteClick(film);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h2 className="movies-card__film-name">{film.nameRU}</h2>
          <p className="movies-card__film-duration">{film.duration}</p>
        </div>
        {isMoviesLocation ? (
          <button
            className="movies-card__button"
            type="button"
            onClick={handleLikeClick}
          >
            <img
              src={isLiked ? likeIcon : unlikeIcon}
              alt="Понравилось"
            />
          </button>
        ) : (
          <button
            className="movies-card__button"
            type="button"
            onClick={handleDeleteClick}
          >
            <img src={removeIcon} alt="Удалить" />
          </button>
        )}
      </div>
      <Link
        className="movies-card__trailer"
        to={film.trailerLink}
        target="_blank"
      >
        <img
          className="movies-card__cover"
          src={
            isMoviesLocation
              ? `https://api.nomoreparties.co${film.image.url}`
              : film.image
          }
          alt="Обложка фильма"
        />
      </Link>
    </article>
  );
}

export default MoviesCard;