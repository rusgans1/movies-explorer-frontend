import "./Register.css";
import { useEffect, useState } from "react";
import { NAME_PATTERN, EMAIL_PATTERN } from "../../utils/constans";
import { useValues } from "../../hooks/useValues";
import FormUnit from "../../UI/FormUnit/FormUnit";
import InputUnit from "../../UI/InputUnit/InputUnit";
import ButtonUnit from "../../UI/ButtonUnit/ButtonUnit";

function Register({ onSubmitClick }) {
  const { values, valuesValid, handleChange } = useValues({}, {});
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function checkValidation() {
      const array = Object.values(valuesValid);
      if (array.length !== 0 && array.length === 3) {
        array.includes(false)
          ? setIsActiveButton(false)
          : setIsActiveButton(true);
      }
    }
    checkValidation();
  }, [valuesValid]);

  function handleSubmitButton(e) {
    e.preventDefault();
    onSubmitClick(
      values,
      setIsActiveButton,
      setIsInputDisabled,
      setErrorMessage
    );
  }

  return (
    <section className="register" aria-label="Регистрация">
      <FormUnit>
        <InputUnit
          labelText={"Имя"}
          inputName={"name"}
          inputType={"text"}
          inputValue={values.name}
          inputValid={valuesValid.name}
          inputOnChange={handleChange}
          inputPattern={NAME_PATTERN}
          inputActive={isInputDisabled}
          errorText={"Введите имя правильно"}
        />
        <InputUnit
          labelText={"E-mail"}
          inputName={"email"}
          inputType={"email"}
          inputValue={values.email}
          inputValid={valuesValid.email}
          inputOnChange={handleChange}
          inputPattern={EMAIL_PATTERN}
          inputActive={isInputDisabled}
          errorText={"Неверный Email"}
        />
        <InputUnit
          labelText={"Пароль"}
          inputName={"password"}
          inputType={"password"}
          inputValue={values.password}
          inputValid={valuesValid.password}
          inputOnChange={handleChange}
          inputActive={isInputDisabled}
          errorText={"Неверный пароль"}
        />
        <ButtonUnit
          buttonText={"Зарегистрироваться"}
          paragraphText={"Уже зарегистрированы?"}
          linkText={"Войти"}
          linkRoute={"/signin"}
          buttonOnClick={handleSubmitButton}
          isButtonActive={isActiveButton}
          errorMessage={errorMessage}
        />
      </FormUnit>
    </section>
  );
}

export default Register;