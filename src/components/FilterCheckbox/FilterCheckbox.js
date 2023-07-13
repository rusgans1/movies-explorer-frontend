import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <input className="filter__checkbox" type="checkbox" id="switch"></input>
      <label className="filter__checkbox-label" for="switch"></label>
      <div className="filter__background"></div>
      <span className="filter__tumb"></span>
    </div>
  );
}

export default FilterCheckbox;