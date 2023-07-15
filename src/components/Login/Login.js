import "./Login.css";
import { useEffect, useState } from "react";
import { useValues } from "../../hooks/useValues";
import { emailPattern } from "../../utils/constans";
import FormUnit from "../../UI/FormUnit/FormUnit";
import InputUnit from "../../UI/InputUnit/InputUnit";
import ButtonUnit from "../../UI/ButtonUnit/ButtonUnit";

function Login({ onSubmitClick }) {
  const { values, valuesValid, handleChange } = useValues({}, {});
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    function checkValidation() {
      const array = Object.values(valuesValid);
      if (array.length !== 0 && array.length === 2) {
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
    <section className="login" aria-label="Вход">
      <FormUnit>
        <InputUnit
          labelText={"E-mail"}
          inputName={"email"}
          inputType={"email"}
          inputValue={values.email}
          inputValid={valuesValid.email}
          inputOnChange={handleChange}
          inputPattern={emailPattern}
          inputActive={isInputDisabled}
          errorText={"Email не соответствует"}
        />
        <InputUnit
          labelText={"Пароль"}
          inputName={"password"}
          inputType={"password"}
          inputValue={values.password}
          inputValid={valuesValid.password}
          inputOnChange={handleChange}
          inputActive={isInputDisabled}
          errorText={"Ошибка ввода пароля"}
        />
        <ButtonUnit
          buttonText={"Войти"}
          paragraphText={"Ещё не зарегистрированы?"}
          linkText={"Регистрация"}
          linkRoute={"/signup"}
          isButtonActive={isActiveButton}
          buttonOnClick={handleSubmitButton}
          errorMessage={errorMessage}
        />
      </FormUnit>
    </section>
  );
}

export default Login;