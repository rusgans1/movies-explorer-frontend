import "./Login.css";
import FormUnit from "../../UI/FormUnit/FormUnit";
import InputUnit from "../../UI/InputUnit/InputUnit";
import ButtonUnit from "../../UI/ButtonUnit/ButtonUnit";

function Login() {
  return (
    <section className="login" aria-label="Вход">
      <FormUnit>
        <InputUnit
          labelText={"E-mail"}
          inputName={"email"}
          inputType={"email"}
          inputValue={"nikolay@gmail.com"}
        />
        <InputUnit
          labelText={"Пароль"}
          inputName={"password"}
          inputType={"password"}
          inputValue={"123456789"}
        />
        <ButtonUnit
          buttonText={"Войти"}
          paragraphText={"Ещё не зарегистрированы?"}
          linkText={"Регистрация"}
          linkRoute={"/signin"}
        ></ButtonUnit>
      </FormUnit>
    </section>
  );
}

export default Login;