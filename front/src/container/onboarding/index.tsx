import React from "react";
import "./index.scss";
import { useState } from "react";

const OnboardingPage: React.FC = () => {
  const[toggled, setToggled] = useState(false);
  return (
    <div className="page">
      <header>
        <div className="left">
          <img
            style={{ width: "177px", height: "62px" }}
            src="/img/logo.png"
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
            <div className="forStickerPlacing">
            <img className="sticker2"  style={{height:"158px", width:"191.95px"}}src="/img/illustr2.png" alt="стікер чат" />
            <div className="text">
            {/* style={{marginBottom:"24px"}} */}
            <h1 > <span style={{color: "#1ED760"}}>Чат-платформа</span> для обговорення хобі</h1>
            <p style={{width:"120%"}} >Діліться захопленнями, знаходьте однодумців, обговорюйте все, що вас надихає. Читайте, подорожуйте, готуйте, грайте, майструйте - тут ви не самотні!</p>
            </div>
            <img className="sticker1" style={{height:"153.79px", width:"268.48px"}}src="/img/illustr1.png" alt="стікер привіт" />
            </div>
        </div>
        <div className="values">
            <p>Наші цінності</p>
            <div className="list">
                <div className="first">
                    <img src="/img/1..png" alt="1" />
                    <p>Ми створюємо дружнє та підтримуюче середовище, де кожен може знайти однодумців і нових друзів.</p>
                </div>
                <div className="second">
                    <img src="/img/2..png" alt="2" />
                    <p>Ми цінуємо різні погляди і захоплення, забезпечуючи платформу для обговорення будь-яких тем.</p>
                </div>
                <div className="third">
                    <img src="/img/3..png" alt="3" />
                    <p>Ми несемо відповідальність за контент, який публікується в нашому чаті, і вживаємо заходів для видалення будь-якого шкідливого або образливого контенту.</p>
                </div>
                <div className="fourth">
                    <img src="/img/4..png"alt="4" />
                    <p>Ми слухаємо вас та постійно покращуємо нашу платформу, щоб зробити ваше спілкування ще зручнішим і приємнішим.</p>
                </div>
            </div>
        </div>
      </main>
      <footer>
        <img src="/img/logo2.png" alt="logo" />
        <a href="#logo"> Про лого</a>
        <a href="#values">Наші цінності</a>
        <p>Соц. мережі</p>
        <img src="/img/Facebook.png" alt="Facebook" />
        <img src="/img/LinkedIn.png" alt="LinkedIn" />
        <button id="ua">UA</button>
            <button id="en">EN</button>
            <p>YAQ, 2024 © р.</p>
      </footer>
    </div>
  );
};
export default OnboardingPage;
