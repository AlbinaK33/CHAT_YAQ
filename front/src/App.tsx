import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./container/signup";

import SignInPage from "./container/signin";
import SignNamePage from "./container/signName";

import OnboardingPage from "./page/onboarding"
import RecoveryPage from "./container/recoveryPage";
import RecoveryPasswordPage from "./container/recoveryPassword";
import TimezonePage from "./container/timezonePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<OnboardingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signname" element={<SignNamePage />} />
        <Route path="/timezone" element={<TimezonePage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/recoveryPassword" element={<RecoveryPasswordPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
