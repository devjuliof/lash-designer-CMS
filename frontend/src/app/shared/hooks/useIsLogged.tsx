import React from "react"
import { IsLoggedContext } from "../contexts/IsLoggedContext"

export const useIsLogged = () => {
  const context = React.useContext(IsLoggedContext)
  if (!context) {
    throw new Error('useIsLogged must be used within an IsLoggedProvider')
  }
  return context;
}