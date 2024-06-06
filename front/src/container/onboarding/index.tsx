import React from "react";
import "./index.scss";
// import Logo from "/public/img/logo.png";
// import { useState } from "react";


const OnboardingPage: React.FC = () => {
//  const[toggled, setToggled] = useState(false);
  return (
    <div className="page">
      <header>
        <div className="left">
          {/* <img
            style={{ width: "177px", height: "62px" }}
            src={Logo}
            alt="Logo"
          /> */}
          <p>Про лого</p>
          <p>Наші цінності</p>
        </div>
        <div className="right">
          <div className="switches">
            <button id="ua">UA</button>
            <button id="en">EN</button>
            <button className="toggle-btn" >
            </button>
          </div>
          <div className="log">
            <button id="log-in">Увійти</button>
            <button id="sign-up">Зареєструватися</button>
          </div>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default OnboardingPage;
