export const namePattern = "[a-zA-Zа-яА-Я0-9 -]{2,30}";
export const emailPattern = "[a-z0-9]{2,30}@[a-z]{2,10}\\.[a-z]{2,5}";

export const unfindError = {
  errorCode: 404,
  errorMessage: "Страница не найдена.",
};

export const serverError = {
  errorCode: 500,
  errorMessage: "Произошла ошибка.",
};

export const errorMessage = {
  errorLogin: "Вы ввели неверный логин или пароль.",
  errorEmail: "Пользователь с таким email уже существует.",
  errorRegister: "При регистрации произошла ошибка.",
  errorUpdateUserInfo: "При обновлении данныч произошла ошибка.",
  successUpdateMessage: "Данные успешно изменены",
};

export const moviesRenderConfig = {
  desktopWidth: 7,
  mobileWidth: 5,
  moreDesktopWidthFilm: 7,
  moreMobileWidthFilm: 1,
};

export const shortFilmDuration = 40;