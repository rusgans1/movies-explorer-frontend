import "./InputUnit.css";

function InputUnit({ labelText, inputName, inputType, inputValue, errorTextLabel }) {
  const isValid = true;

  return (
    <div className="input-unit">
      <label className="input-unit__label">{labelText}</label>
      <input
        name={`${inputName}`}
        type={`${inputType}`}
        className="input-unit__input"
        value={`${inputValue}`}
        required
      ></input>
      <label
        className={`input-unit__label input-unit__label_error ${
          isValid ? "input-unit__label_error_validation" : ""
        }`}
      >
        {errorTextLabel}
      </label>
    </div>
  );
}

export default InputUnit;