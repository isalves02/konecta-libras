import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GeneralContextProvider } from "./contexts/GeneralContextProvider"
import React from "react"

export function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <GeneralContextProvider>
            <Router />
          </GeneralContextProvider>
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}