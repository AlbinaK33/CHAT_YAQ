import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./container/signup";
import SignInPage from "./container/signin";
import SignNamePage from "./container/signName";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <Routes>
        <Route path="/signname" element={<SignNamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
