import { createContext, useState } from "react";

//the value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //the .provider is the component that will wrap around any other components that need access to the values inside
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
