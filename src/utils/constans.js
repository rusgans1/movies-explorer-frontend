export const NAME_PATTERN = "[a-zA-Zа-яА-Я0-9 -]{2,30}";
export const EMAIL_PATTERN = "[a-z0-9]{2,30}@[a-z]{2,10}\\.[a-z]{2,5}";

export const UNFIND_ERROR = {
  errorCode: 404,
  errorMessage: "Страница не найдена.",
};

export const SERVER_ERROR = {
  errorCode: 500,
  errorMessage: "Произошла ошибка.",
};

export const ERROR_MESSAGE = {
  errorLogin: "Вы ввели неверный логин или пароль.",
  errorEmail: "Пользователь с таким email уже существует.",
  errorRegister: "При регистрации произошла ошибка.",
  errorUpdateUserInfo: "При обновлении данных произошла ошибка.",
  successUpdateMessage: "Данные успешно изменены",
};

export const MOVIES_RENDER_CONFIG = {
  desktopWidth: 7,
  mobileWidth: 5,
  moreDesktopWidthFilm: 7,
  moreMobileWidthFilm: 1,
};

export const SHORT_FILM_DURATION = 40;