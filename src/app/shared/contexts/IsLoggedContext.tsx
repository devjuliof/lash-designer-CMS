import React, { ReactNode } from "react";
import { createContext } from "react";

interface IsLoggedProviderProps {
  children: ReactNode;
}

interface IsLoggedContextProps {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

export const IsLoggedContext = createContext<IsLoggedContextProps | undefined>(undefined);

export const IsLoggedProvider: React.FC<IsLoggedProviderProps> = ({children}) => {
  const [isLogged, setIsLogged] = React.useState(false)

  return (
  <IsLoggedContext.Provider value={{isLogged, setIsLogged}}>
    {children}
  </IsLoggedContext.Provider>
  );
}