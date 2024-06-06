import React from "react";
import "./index.scss";
import logo from "../../img/logo.png";
import { useState } from "react";
import illustr1 from "../../img/illustr1.png";
import illustr2 from "../../img/illustr2.png";
import num1 from "../../img/1..png";
import num2 from "../../img/2..png";
import num3 from "../../img/3..png";
import num4 from "../../img/4..png";
import logo2 from "../../img/logo2.png";
import logoFacebook from "../../img/Facebook.png";
import logoLinkedIn from "../../img/LinkedIn.png";


const OnboardingPage: React.FC = () => {
  const[toggled, setToggled] = useState(false);
  return (
    <div className="page">
      <header>
        <div className="left">
          <img
            style={{ width: "177px", height: "62px" }}
            src={logo}
            alt="Logo"
          />
          <a href="#logo"> Про лого</a>
          <a href="#values">Наші цінності</a>
        </div>
        <div className="right">
          <div className="switches">
            <button id="ua">UA</button>
            <button id="en">EN</button>
            <button className="toggle-btn" onClick={()=> setToggled(!toggled)}>  
            </button>
          </div>
          <div className="log">
            <button id="log-in">Увійти</button>
            <button id="sign-up">Зареєструватися</button>
          </div>
        </div>
      </header>
      <main>
        <div className="intro">
        <img src={illustr1} alt="стікер привіт" />
            <div className="text">
            <p>Чат-платформа для обговорення хобі</p>
            <p>Діліться захопленнями, знаходьте однодумців, обговорюйте все, що вас надихає. Читайте, подорожуйте, готуйте, грайте, майструйте - тут ви не самотні!</p>
            </div>
             <img src={illustr2} alt="стікер чат" />
        </div>
        <div className="values">
            <p>Наші цінності</p>
            <div className="list">
                <div className="first">
                    <img src={num1} alt="1" />
                    <p>Ми створюємо дружнє та підтримуюче середовище, де кожен може знайти однодумців і нових друзів.</p>
                </div>
                <div className="second">
                    <img src={num2} alt="2" />
                    <p>Ми цінуємо різні погляди і захоплення, забезпечуючи платформу для обговорення будь-яких тем.</p>
                </div>
                <div className="third">
                    <img src={num3} alt="3" />
                    <p>Ми несемо відповідальність за контент, який публікується в нашому чаті, і вживаємо заходів для видалення будь-якого шкідливого або образливого контенту.</p>
                </div>
                <div className="fourth">
                    <img src={num4} alt="4" />
                    <p>Ми слухаємо вас та постійно покращуємо нашу платформу, щоб зробити ваше спілкування ще зручнішим і приємнішим.</p>
                </div>
            </div>
        </div>
      </main>
      <footer>
        <img src={logo2} alt="logo" />
        <a href="#logo"> Про лого</a>
        <a href="#values">Наші цінності</a>
        <p>Соц. мережі</p>
        <img src={logoFacebook} alt="Facebook" />
        <img src={logoLinkedIn} alt="LinkedIn" />
        <button id="ua">UA</button>
            <button id="en">EN</button>
            <p>YAQ, 2024 © р.</p>
      </footer>
    </div>
  );
};

export default OnboardingPage;
