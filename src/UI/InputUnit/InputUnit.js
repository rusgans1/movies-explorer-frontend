import "./InputUnit.css";

function InputUnit({
  labelText,
  inputName,
  inputType,
  inputValue,
  inputValid,
  inputOnChange,
  inputPattern,
  inputActive,
  errorText
}) {

  return (
    <div className="input-unit">
      <label className="input-unit__label">{labelText}</label>
      <div className="input-unit__input-block">
      {inputPattern ? (
        <input
          name={`${inputName}`}
          type={`${inputType}`}
          className={`input-unit__input ${
            inputValid ? "" : "input-unit__input_invalid "
          }`}
          value={inputValue ? inputValue : ""}
          onChange={inputOnChange}
          pattern={inputPattern}
          disabled={inputActive}
          required
        ></input>
        ) : (
          <input
            name={`${inputName}`}
            type={`${inputType}`}
            className={`input-unit__input ${
              inputValid ? "" : "input-unit__input_invalid "
            }`}
            value={inputValue ? inputValue : ""}
            onChange={inputOnChange}
            disabled={inputActive}
            required
          ></input>
        )}
      </div>
      <label
        className={`input-unit__label input-unit__label_error ${
          inputValid !== undefined
            ? inputValid
              ? ""
              : "input-unit__label_error_validation"
            : ""
        }`}
      >
        {errorText}
      </label>
    </div>
  );
}

export default InputUnit;