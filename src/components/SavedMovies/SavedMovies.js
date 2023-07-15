import "./SavedMovies.css";
import { useState, useEffect } from "react";
import { shortFilmDuration } from "../../utils/constans";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ savedMovies, onDeleteClick, isLoading }) {
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isEmptyList, setIsEmptyList] = useState(false);
  const [isUnfindFilms, setIsUnfindFilms] = useState(false);

  function handleFilterButtonClick(inputValue) {
    setInputValue(inputValue);
  }

  function handleCheckboxClick(e) {
    setIsChecked(e.target.checked);
  }

  useEffect(() => {
    if (filteredMoviesList.length === 0 && inputValue === "") {
      setIsEmptyList(true);
      setIsUnfindFilms(false);
    } else if (filteredMoviesList.length === 0) {
      setIsEmptyList(false);
      setIsUnfindFilms(true);
    } else {
      setIsEmptyList(false);
      setIsUnfindFilms(false);
    }
  }, [filteredMoviesList, inputValue]);

  useEffect(() => {
    let array = savedMovies.filter((movie) => {
      if (isChecked) {
        return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase());
      } else {
        return (
          movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) &&
          movie.duration > shortFilmDuration
        );
      }
    });
    setFilteredMoviesList(array);
  }, [inputValue, isChecked, savedMovies]);

  return (
    <>
      <SearchForm
        onClickFilterButton={handleFilterButtonClick}
        onClickCheckBox={handleCheckboxClick}
        isChecked={isChecked}
      />
      {isLoading ? (
        <div className="info">
          <div className="preloader">
            <div className="preloader__cover"></div>
          </div>
        </div>
      ) : isEmptyList ? (
        <div className="info">
          <p className="info__title">У вас пока нет сохранненых фильмов.</p>
        </div>
      ) : isUnfindFilms ? (
        <div className="info">
          <p className="info__title">Ничего не нашли, попробуйте снова.</p>
        </div>
      ) : (
        <MoviesCardList
          filteredMovies={filteredMoviesList}
          onDeleteClick={onDeleteClick}
          isSaveMovies={true}
        />
      )}
    </>
  );
}

export default SavedMovies;