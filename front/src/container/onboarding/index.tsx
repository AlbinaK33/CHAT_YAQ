import React from "react";
import "./index.scss";
import { useState } from "react";
import SwitchTheme from "../../component/SwitchTheme";

const OnboardingPage: React.FC = () => {
  const [toggled, setToggled] = useState(false);
  const [swithTheme, setSwithTheme] = useState(true);
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
            <button
              className="toggle-btn"
              onClick={() => setToggled(!toggled)}
            ></button>
           
            <SwitchTheme onChange={()=>setSwithTheme(!swithTheme)}isSwitchOn={swithTheme}/>
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
            <img
              className="sticker2"
              style={{ height: "158px", width: "191.95px" }}
              src="/img/illustr2.png"
              alt="стікер чат"
            />
            <div className="text">
              <h1 style={{ marginBottom: "24px" }}>
                {" "}
                <span style={{ color: "#1ED760" }}>Чат-платформа</span> для
                обговорення хобі
              </h1>
              <p>
                Діліться захопленнями, знаходьте однодумців, обговорюйте все, що
                вас надихає. Читайте, подорожуйте, готуйте, грайте, майструйте -
                тут ви не самотні!
              </p>
            </div>
            <img
              className="sticker1"
              style={{ height: "153.79px", width: "268.48px" }}
              src="/img/illustr1.png"
              alt="стікер привіт"
            />
          </div>
        </div>
        <div id="logo">
          <img style={{width:"681.48px", height:"639px"}}src="/img/Logo card.png" alt="logo card" />
          <img style={{width:"auto", height:"100%"}}src="/img/Logo card.png" alt="logo card" />
          <img  className="sign"style={{width:"325.89px", height:"287.16px"}}src="/img/sign.png" alt="Чому YAQ? Натискай картинку і дізнаєшся" />
        </div>
        <div id="values">
          <h2>Наші цінності</h2>
          <div className="list">
            <div>
              <img src="/img/1..png" alt="1" />
              <p>
                Ми створюємо дружнє та підтримуюче середовище, де кожен може
                знайти однодумців і нових друзів.
              </p>
            </div>
            <div>
              <img src="/img/2..png" alt="2" />
              <p>
                Ми цінуємо різні погляди і захоплення, забезпечуючи платформу
                для обговорення будь-яких тем.
              </p>
            </div>
            <div>
              <img src="/img/3..png" alt="3" />
              <p>
                Ми несемо відповідальність за контент, який публікується в
                нашому чаті, і вживаємо заходів для видалення будь-якого
                шкідливого або образливого контенту.
              </p>
            </div>
            <div>
              <img src="/img/4..png" alt="4" />
              <p>
                Ми слухаємо вас та постійно покращуємо нашу платформу, щоб
                зробити ваше спілкування ще зручнішим і приємнішим.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footerBox">
          <div className="footerLeft">
          <img
            style={{ width: "177px", height: "62px" }}
            className="logo"
            src="/img/logo2.png"
            alt="logo"
          />
          <div className="values">
          <a href="#logo"> Про лого</a>
          <a href="#values">Наші цінності</a>
          </div>
            <div className="social">
          <p>Соц. мережі</p>
          <div style={{display:"flex",gap:"12px"}}><a href="#"><img className="facebook"src="/img/Facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/img/LinkedIn.png" alt="LinkedIn" /></a></div>
          </div> 
          </div>
          <p style={{alignSelf:"end"}}>YAQ, 2024 © р.</p>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingPage;
