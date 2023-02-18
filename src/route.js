import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from './routes/root.js'
import Curriculum from './routes/curriculum.js'
import { LoginScreen, SoftwareScreen } from './containers'

const MainRouters = () => {
  return (
    <Routes>
      <Route 
        exact
        path="/"
        element={<Root />}
      />
      <Route 
        exact
        path="/software"
        element={<SoftwareScreen />}
      />
      <Route 
        exact
        path="/curriculum"
        element={<Curriculum />}
      />
      <Route 
        exact
        path="/login"
        element={<LoginScreen />}
      />
    </Routes>
  )
}

export default MainRouters;
