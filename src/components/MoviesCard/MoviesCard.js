import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import unlikeIcon from "../../images/unlike-icon.svg";
import likeIcon from "../../images/like-icon.svg";
import removeIcon from "../../images/movie-remove-icon.svg";
import filmIcon from "../../images/film-icon.png";

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);

  let location = useLocation();
  const isMoviesLocation = location.pathname === "/movies";

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h2 className="movies-card__film-name">33 слова о дизайне</h2>
          <p className="movies-card__film-duration">1ч 42м</p>
        </div>
        {isMoviesLocation ? (
          <button className="movies-card__button" type="button">
            <img
              src={isLiked ? likeIcon : unlikeIcon}
              alt="Лайк"
              onClick={handleLikeClick}
            />
          </button>
        ) : (
          <button className="movies-card__button">
            <img src={removeIcon} alt="Удалить" />
          </button>
        )}
      </div>
      <img
        className="movies-card__cover"
        src={filmIcon}
        alt="Обложка фильма"
      />
    </article>
  );
}

export default MoviesCard;