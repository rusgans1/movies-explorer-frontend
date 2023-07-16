import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { UNFIND_ERROR, SERVER_ERROR, ERROR_MESSAGE } from "../../utils/constans";
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

  function userCheck() {
    api.getUserInfo()
      .then((res) => {
        if(res) {
          setIsSuccess(true)
          setCurrentUser({ email: res.email, name: res.name })
          navigate("/movies")
        }
      })
      .catch(() => navigate("/signin"))
  }

  useEffect(() => {
    userCheck()
  }, []);

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

  async function handleLoginUser(
    values,
    setIsActiveButton,
    setIsInputDisabled,
    setErrorMessage
  ) {
    setIsInputDisabled(true);
    setIsActiveButton(false);
    api
      .authorization(values)
      .then(() => {
        setIsSuccess(true);
        navigate("/movies");
        localStorage.setItem("isSuccess", true);
      })
      .catch((err) => {
        if (err.status === 401) {
          setErrorMessage(ERROR_MESSAGE.errorLogin);
        } else {
          navigateServerErrorPage();
        }
      })
      .finally(() => {
        setIsInputDisabled(false);
        setIsActiveButton(true);
      });
  }

  function handleRegisterUser(
    values,
    setIsActiveButton,
    setIsInputDisabled,
    setErrorMessage,
  ) {
    setIsInputDisabled(true);
    setIsActiveButton(false);
    api
      .register(values)
      .then(async () => {
        await handleLoginUser(
          values,
          setIsActiveButton,
          setIsInputDisabled,
          setErrorMessage
          );
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrorMessage(ERROR_MESSAGE.errorEmail);
        } else if (Math.floor(err.status / 100) === 5) {
          navigateServerErrorPage();
        } else {
          setErrorMessage(ERROR_MESSAGE.errorRegister);
        }
      })
      .finally(() => {
        setIsInputDisabled(false);
        setIsActiveButton(true);
      });
  }

  function handleChangeUserInfo(
    values,
    setIsActiveButton,
    setIsInputDisabled,
    setIsSuccessMessage,
    setErrorMessage
  ) {
    setIsInputDisabled(true);
    setIsActiveButton(false);
    api
      .changeUserInfo(values)
      .then((newUserInfo) => {
        setIsSuccessMessage(true);
        setErrorMessage(ERROR_MESSAGE.successUpdateMessage);
        setCurrentUser(newUserInfo);
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrorMessage(ERROR_MESSAGE.errorEmail);
        } else if (Math.floor(err.status / 100) === 5) {
          navigateServerErrorPage();
        } else {
          setErrorMessage(ERROR_MESSAGE.errorUpdateUserInfo);
        }
      })
      .finally(() => {
        setIsInputDisabled(false);
        setIsActiveButton(true);
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
          element={<ErrorRoute errorData={SERVER_ERROR} />}
        />
        <Route path="*" element={<ErrorRoute errorData={UNFIND_ERROR} />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;