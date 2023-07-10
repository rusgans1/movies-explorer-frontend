import "./Register.css";
import FormUnit from "../../UI/FormUnit/FormUnit";
import InputUnit from "../../UI/InputUnit/InputUnit";
import ButtonUnit from "../../UI/ButtonUnit/ButtonUnit";

function Register() {
  return (
    <section className="register" aria-label="Регистрация">
      <FormUnit>
        <InputUnit
          labelText={"Имя"}
          inputName={"user-name"}
          inputType={"text"}
          inputValue={"Николай"}
        />
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
          errorTextLabel={"Что-то пошло не так..."}
        />
        <ButtonUnit
          buttonText={"Зарегистрироваться"}
          paragraphText={"Уже зарегистрированы?"}
          linkText={"Войти"}
          linkRoute={"/signup"}
        ></ButtonUnit>
      </FormUnit>
    </section>
  );
}

export default Register;