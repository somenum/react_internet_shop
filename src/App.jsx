import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => (
  <ThemeProvider>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
    </Routes>
  </ThemeProvider>
);

export default App;
