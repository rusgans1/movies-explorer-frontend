import "./SearchForm.css";
import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onClickFilterButton, onClickCheckBox, searchValue, isChecked }) {
  const [filmFilter, setFilmFilter] = useState(searchValue ? searchValue : "");

  function handleFilmFilter(e) {
    e.preventDefault();
    setFilmFilter(e.target.value);
  }

  function handleFilterButton(e) {
    e.preventDefault();
    onClickFilterButton(filmFilter);
  }

  return (
    <section className="search-form" aria-label="Поиск">
    <form className="search-form__form">
      <div className="search-form__input-container">
        <div className="search-form__input-block">
          <input
            className="search-form__input"
            placeholder="Фильм"
            onChange={handleFilmFilter}
            value={filmFilter}
            required
          ></input>
        </div>
        <button
          className="search-form__button" 
          alt="Найти"
          type="submit"
          onClick={handleFilterButton}
        >
          Найти
        </button>
      </div>
      <div className="search-form__checkbox-container">
        <FilterCheckbox onClick={onClickCheckBox} isChecked={isChecked} />
        <label
          className="search-form__checkbox-label"
          htmlFor="switch"
          onClick={onClickCheckBox}
        >
          Короткометражки
        </label>
      </div>
    </form>
    <hr className="search-form__line"></hr>
  </section>
  );
}

export default SearchForm;