import { createContext } from "react";

const initialUserData = {
  name: '',
  email: '',
};

export const CurrentUserContext = createContext(initialUserData);