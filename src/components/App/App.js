import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { unfindError, serverError, errorMessage } from "../../utils/constans";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import api from "../../utils/MainApi";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ErrorRoute from "../ErrorRoute/ErrorRoute";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(
    localStorage.getItem("isSuccess") != null
      ? localStorage.getItem("isSuccess") === "true" && true
      : false
  );

  function navigateServerErrorPage() {
    navigate("/server-error");
  }

  useEffect(() => {
    if (isSuccess) {
      setIsLoading(true);
      Promise.all([
        moviesApi.getMovies(),
        api.getSavedMovies(),
        api.getUserInfo(),
      ])
        .then((data) => {
          setMovies(data[0]);
          setSavedMovies(data[1]);
          setCurrentUser(data[2]);
        })
        .catch(() => navigateServerErrorPage())
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isSuccess]);

  function handleLoginUser(
    data,
    stateInputDisabled,
    stateButton,
    stateMessage
  ) {
    stateInputDisabled(true);
    api
      .authorization(data)
      .then(() => {
        setIsSuccess(true);
        navigate("/movies");
        localStorage.setItem("isSuccess", true);
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 401) {
          stateMessage(errorMessage.errorLogin);
        } else {
          navigateServerErrorPage();
        }
      })
      .finally(() => {
        stateInputDisabled(false);
      });
  }

  function handleRegisterUser(
    data,
    stateInputDisabled,
    stateButton,
    stateMessage
  ) {
    stateInputDisabled(true);
    api
      .register(data)
      .then(() => {
        handleLoginUser(data, stateInputDisabled);
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 409) {
          stateMessage(errorMessage.errorEmail);
        } else if (Math.floor(err.status / 100) === 5) {
          navigateServerErrorPage();
        } else {
          stateMessage(errorMessage.errorRegister);
        }
      })
      .finally(() => {
        stateInputDisabled(false);
      });
  }

  function handleChangeUserInfo(
    data,
    stateInputDisabled,
    stateIsSuccess,
    stateButton,
    stateMessage
  ) {
    stateInputDisabled(true);
    api
      .changeUserInfo(data)
      .then((newUserInfo) => {
        stateMessage(errorMessage.successUpdateUser);
        stateIsSuccess(true);
        setCurrentUser(newUserInfo);
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 409) {
          stateMessage(errorMessage.errorEmail);
        } else if (Math.floor(err.status / 100) === 5) {
          navigateServerErrorPage();
        } else {
          stateMessage(errorMessage.errorUpdateUserInfo);
        }
      })
      .finally(() => {
        stateInputDisabled(false);
      });
  }

  function handleLogOut() {
    api
      .logOut()
      .then(() => {
        localStorage.clear();
        setIsSuccess(false);
      })
      .catch(() => navigateServerErrorPage());
  }

  function handleSavedMovie(data) {
    api
      .createMovie(data)
      .then((movie) => {
        setSavedMovies((movies) => {
          return [...movies, movie];
        });
      })
      .catch(() => navigateServerErrorPage());
  }

  function handleDeleteMovie(data) {
    const movie = savedMovies.find((movie) => movie.movieId === data.id);
    api
      .deleteMovie(movie)
      .then((movie) => {
        setSavedMovies((movies) => {
          return movies.filter((film) => film._id !== movie._id);
        });
      })
      .catch(() => navigateServerErrorPage());
  }

  function handleRemoveSavedMovie(data) {
    api
      .deleteMovie(data)
      .then((movie) => {
        setSavedMovies((movies) => {
          return movies.filter((film) => film._id !== movie._id);
        });
      })
      .catch(() => navigateServerErrorPage());
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path="/" element={<Layout isSuccess={isSuccess} />}>
          <Route index element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isSuccess={isSuccess}>
                <Movies
                  movies={movies}
                  onSavedClick={handleSavedMovie}
                  onDeleteClick={handleDeleteMovie}
                  isLoading={isLoading}
                  savedMovies={savedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isSuccess={isSuccess}>
                <SavedMovies
                  savedMovies={savedMovies}
                  onDeleteClick={handleRemoveSavedMovie}
                  isLoading={isLoading}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isSuccess={isSuccess}>
                <Profile
                  onUpdateInfoClick={handleChangeUserInfo}
                  onLogOutClick={handleLogOut}
                  isLoading={isLoading}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute isSuccess={!isSuccess}>
                <Register onSubmitClick={handleRegisterUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute isSuccess={!isSuccess}>
                <Login onSubmitClick={handleLoginUser} />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/server-error"
          element={<ErrorRoute errorData={serverError} />}
        />
        <Route path="*" element={<ErrorRoute errorData={unfindError} />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;