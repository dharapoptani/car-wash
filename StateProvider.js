import React, { useContext, useState } from "react";

const dataContext = React.createContext();

export const useDataStore = () => useContext(dataContext);

const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);
  const data = {
    user,
    setUser,

    loggedIn,
    setLoggedIn,
  };
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default StateProvider;
