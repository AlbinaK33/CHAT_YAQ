import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./container/signup";
import OnboardingPage from "./container/onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage/>}/>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
