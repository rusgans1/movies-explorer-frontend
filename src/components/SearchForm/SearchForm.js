import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form" aria-label="Поиск">
    <form className="search-form__form">
      <div className="search-form__input-container">
        <div className="search-form__input-block">
          <input
            className="search-form__input"
            placeholder="Фильм"
            required
          ></input>
        </div>
        <button className="search-form__button" alt="Найти">
          Найти
        </button>
      </div>
      <div className="search-form__checkbox-container">
        <FilterCheckbox />
        <label className="search-form__checkbox-label" for="switch">
          Короткометражки
        </label>
      </div>
    </form>
    <hr className="search-form__line"></hr>
  </section>
  );
}

export default SearchForm;