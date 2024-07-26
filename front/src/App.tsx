import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./container/signup";

import SignInPage from "./container/signin";
import SignNamePage from "./container/signName";

import { createContext } from "vm";
import OnboardingPage from "./page/onboarding"
import RecoveryPage from "./container/recoveryPage";
import RecoveryPasswordPage from "./container/recoveryPassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <Routes>
        <Route path="/signname" element={<SignNamePage />} />
      </Routes>
      <Routes>
        <Route path="/recovery" element={<RecoveryPage />} />
      </Routes>
      <Routes>
        <Route path="/recoveryPassword" element={<RecoveryPasswordPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
