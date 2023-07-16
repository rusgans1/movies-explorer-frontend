import "./Movies.css";
import React from "react";
import { useEffect, useState } from "react";
import { SHORT_FILM_DURATION } from "../../utils/constans";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({
  movies,
  onSavedClick,
  onDeleteClick,
  isLoading,
  savedMovies,
}) {
  const localInputValue = localStorage.getItem("inputValue");
  const localCheckBoxStatus = localStorage.getItem("CheckboxStatus");
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);
  const [isFirstLog, setIsFirstLog] = useState(false);
  const [isUnfindFilms, setIsUnfindFilms] = useState(false);
  const [inputValue, setInputValue] = useState(
    localInputValue !== null ? localInputValue : ""
  );
  const [isChecked, setIsChecked] = useState(
    localCheckBoxStatus !== null
      ? localCheckBoxStatus === "true"
        ? true
        : false
      : false
  );

  function handleFilterButtonClick(inputValue) {
    setInputValue(inputValue);
    localStorage.setItem("inputValue", inputValue);
  }

  function handleCheckboxClick(e) {
    setIsChecked(e.target.checked);
    localStorage.setItem("CheckboxStatus", e.target.checked);
  }

  useEffect(() => {
    if (filteredMoviesList.length === 0 && inputValue === "") {
      setIsFirstLog(true);
      setIsUnfindFilms(false);
    } else if (filteredMoviesList.length === 0) {
      setIsFirstLog(false);
      setIsUnfindFilms(true);
    } else {
      setIsFirstLog(false);
      setIsUnfindFilms(false);
    }
  }, [filteredMoviesList, inputValue]);

  useEffect(() => {
    let array = movies.filter((movie) => {
      if (isChecked) {
        return (
          movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) &&
          movie.duration <= SHORT_FILM_DURATION
        );
      } else {
        return (
          movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
        );
      }
    });
    setFilteredMoviesList(array);
  }, [inputValue, isChecked, movies]);

  return (
    <>
      <SearchForm
        onClickFilterButton={handleFilterButtonClick}
        onClickCheckBox={handleCheckboxClick}
        searchValue={inputValue}
        isChecked={isChecked}
      />
      {isLoading ? (
        <div className="info">
          <div className="preloader">
            <div className="preloader__cover"></div>
          </div>
        </div>
      ) : isFirstLog ? (
        <div className="info">
          <p className="info__title">Начните поиск</p>
        </div>
      ) : isUnfindFilms ? (
        <div className="info">
          <p className="info__title">Ничего не найдено.</p>
        </div>
      ) : (
        <MoviesCardList
          filteredMovies={filteredMoviesList}
          onSavedClick={onSavedClick}
          onDeleteClick={onDeleteClick}
          savedMovies={savedMovies}
          isSaveMovies={false}
        />
      )}
    </>
  );
}

export default Movies;