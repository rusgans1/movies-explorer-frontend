class MainApi {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  register = ({ name, email, password }) => {
    return fetch(`${this._baseURL}/signup`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    })
      .then(this._checkStatus);
  };

  authorization = ({ password, email }) => {
    return fetch(`${this._baseURL}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ password, email }),
    })
      .then(this._checkStatus);
  };

  logOut = () => {
    return fetch(`${this._baseURL}/signout`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
    })
      .then(this._checkStatus);
  };

  getUserInfo = () => {
    return fetch(`${this._baseURL}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    })
      .then(this._checkStatus);
  };

  changeUserInfo = ({ name, email }) => {
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    })
      .then(this._checkStatus);
  };

  getSavedMovies = () => {
    return fetch(`${this._baseURL}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    })
      .then(this._checkStatus);
  };

  createMovie = ({
    id,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
  }) => {
    return fetch(`${this._baseURL}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        movieId: id,
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        nameRU,
        nameEN,
        image: `https://api.nomoreparties.co${image.url}`,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
      }),
    }).then(this._checkStatus);
  };

  deleteMovie = ({ _id }) => {
    return fetch(`${this._baseURL}/movies/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    })
      .then(this._checkStatus);
  };
}

const api = new MainApi({
  baseURL: "https://api.diploma.petrov.nomoredomains.work",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;