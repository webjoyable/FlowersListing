import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext({
  userData: {},
  setCurrentUser: () => {},
});

const CurrentUserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const setCurrentUser = (data) => setUserData(data);

  return (
    <CurrentUserContext.Provider value={{ setCurrentUser, userData }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
