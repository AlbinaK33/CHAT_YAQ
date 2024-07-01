import React, { useEffect, useMemo } from "react";
import "./index.scss";
import { useState } from "react";
import SwitchTheme from "../../component/SwitchTheme";
import { easeInOut, motion, useAnimation } from "framer-motion"
import { useNavigate } from "react-router-dom";

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [swithTheme, setSwithTheme] = useState(true);
  const [showText, setShowText] = useState(false);
  const [language, setLanguage] = useState("ua");

  const state = useMemo(() => {
    if (language === "ua") {
      return {
        aboutLogo: "Про лого",
        aboutValues: "Наші цінності",
        logIn: "Зареєструватися",
        signUp: "Увійти",
        chatPlatformSpan: "Чат-платформа",
        chatPlatform: "для обговорення хобі",
        description:
          "Діліться захопленнями, знаходьте однодумців, обговорюйте все, що вас надихає. Читайте, подорожуйте, готуйте, грайте, майструйте -тут ви не самотні!",
        logoText: {
          1: "Історія «YAQ» розпочинається з простого, але глибокого українського слова - «Як». Це запитання, що несе в собі прагнення до знань, допитливість та відкритість до нового.",
          2: "Українська мова, як душа нашого народу, лежить в основі логотипу. Це щирий погляд на світ, щирість емоцій та глибина думки.",
          3: "Але ж ми живемо в епоху глобалізації, де інформація доступна на дотик пальця, а комункація об’єднує наc з різних куточків світу, тому було вирішено зберегти звучання «Як», але написати його англійською розкладкою.",
          4: "«YAK» - лаконічне й динамічне, воно немов запрошує до діалогу, до обміну думками та пошуку відповідей, однак, чогось бракувало. ",
          5: "Один з геніїв команди запропонував додати літеру «Q» - з відсилкою до слова «question», адже саме це слово й лежить в основі чату.",
          6: "Ось так, завдяки командній роботі та креативному підходу, народився логотип «YAQ», який не просто візуальний символ, він - втілення нашої мети - допомогти людям отримувати комнунікацію, ділитися думками та творити разом.",
        },
        logoHeartSignature: "/img/signature.png",
        logoSignature: "/img/sign.png",
        valuesList: {
          1: "Ми створюємо дружнє та підтримуюче середовище, де кожен може знайти однодумців і нових друзів.",
          2: "Ми цінуємо різні погляди і захоплення, забезпечуючи платформу для обговорення будь-яких тем.",
          3: "Ми відповідальні за контент у нашому чаті та вживаємо заходів для видалення будь-якого шкідливого або образливого матеріалу.",
          4: "Ми слухаємо вас та постійно покращуємо нашу платформу, щоб зробити ваше спілкування ще зручнішим і приємнішим.",
        },
        socialSignature: "Соц. мережі",
        sticker1: "/img/illustr1.png",
        sticker2: "/img/illustr2.png",
      };
    }
    if (language === "en") {
      return {
        aboutLogo: "About logo",
        aboutValues: "Our values",
        logIn: "Sign up",
        signUp: "Log in",
        chatPlatformSpan: "Chat platform",
        chatPlatform: "for discussing hobbies",
        description:
          "Share your passions, find like-minded people, discuss everything that inspires you. Read, travel, cook, play, create - you are not alone here!",
        logoText: {
          1: "The history of «YAQ» begins with a simple but deep Ukrainian word - «Як». This is a question that carries a desire for knowledge, curiosity and openness to new things.",
          2: "The Ukrainian language, as the soul of our people, forms the basis of the logo. It is a sincere view of the world, sincerity of emotions and depth of thought.",
          3: "But after all, we live in an era of globalization, where information is available at the touch of a finger, and communication unites us from different corners of the world. Therefore, it was decided to preserve the sound of «Yak», but to write it in the English layout.",
          4: "«YAK» - is concise and dynamic, it seems to invite dialogue, exchange of ideas and search for answers, however, something was missing.",
          5: "One of the geniuses of the team suggested adding a letter «Q» - with a reference to the word «question», because it is this word that is the basis of the chat.",
          6: "And so, through teamwork and a creative approach, the «YAQ» logo was born. It's not just a visual symbol; it embodies our mission to help people communicate, share ideas, and create together.",
        },
        logoHeartSignature: "/img/logoHeartSignatureEn.png",
        logoSignature: "/img/why YAQen.png",
        sticker1: "/img/illustr1en.png",
        sticker2: "/img/illustr2en.png",
        valuesList: {
          1: "We create a friendly and supportive environment where everyone can find like-minded people and make new friends.",
          2: "We value diverse perspectives and interests, providing a platform for discussion on any topic.",
          3: "We are responsible for the content in our chat and take steps to remove any harmful or offensive material.",
          4: "We listen to you and constantly improve our platform to make your communication more convenient and enjoyable.",
        },
        socialSignature: "Social media",
      };
    }
  }, [language]);
  useEffect(() => {}, [state]);
  const signUp = () => {
    navigate("/signup");
  };
  const handleSwitchTheme = () => {
    if (swithTheme) {
      document.body.style.backgroundColor = "#1E1E1E";
      document.body.style.color = "#FFFFFF";
    } else {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#000000";
    }
};
const textVariants = {
  light: {  x: 0, transition: { behavior: easeInOut,  duration: 0.3 } },
  dark: {  x:-25, transition: { behavior: easeInOut, duration: 0.3 } }
};
const showVariants = {
  show:{ opacity: 1, transition: { duration: 0.3 } },
  hide: { opacity: 0, transition: { duration: 0.3 } }
};
const controls = useAnimation();
useEffect(() => {
  if (swithTheme === false) {
    controls.start('dark');
  } else {
    controls.start('light');
  }
}, [swithTheme, controls]);
useEffect(() => {
  if(showText){
    controls.start('show');
  }
  else{
    controls.start('hide');
  }
}, [showText,controls]);
  return (
    <div className={swithTheme? "page": "page-black"}>
      <header>
        <div className="left">
          <img
            style={{ width: "177px", height: "62px" }}
            src={swithTheme? "/img/logo.png": "/img/logo2.png"}
            alt="Logo"
          />
          <a href="#logo"> {state?.aboutLogo}</a>
          <a href="#values">{state?.aboutValues}</a>
        </div>
        <div className="right">
          <div className= "switches">
            <button
              id="ua"
              style={language==="ua"? {
                backgroundColor: "#E9FBEF",
                color: "#1ED760",
              }: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: swithTheme?  "#000000": "#ffffff",
              }}
              onClick={() => setLanguage("ua")}
            >
              UA
            </button>
            <button
              id="en"
              style={language==="en"?{
                backgroundColor: "#E9FBEF",
                color: "#1ED760",
              }: {
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: swithTheme?  "#000000": "#ffffff",
              } }
              onClick={() => setLanguage("en")}
            >
              EN
            </button>

            <SwitchTheme
              onChange={() => {setSwithTheme(!swithTheme); handleSwitchTheme()}}
              isSwitchOn={swithTheme}
            />
          </div>
          <div className="log">
            <button id="log-in">{state?.signUp}</button>
            <button onClick={signUp} id="sign-up">
              {state?.logIn}
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="intro">
          <div className="forStickerPlacing">
            <img
              className="sticker2"
              style={{ height: "158px", width: "191.95px" }}
              src={state?.sticker2}
              alt="стікер чат"
            />
            <motion.div className="text" animate={controls} variants={textVariants}>
              <h1 style={{ marginBottom: "24px" }}>
                {" "}
                <span style={{ color: "#1ED760" }}>
                  {state?.chatPlatformSpan}
                </span>{" "}
                {state?.chatPlatform}
              </h1>
              <p>{state?.description}</p>
            </motion.div>
            <img
              className="sticker1"
              style={{ height: "153.79px", width: "268.48px" }}
              src={state?.sticker1}
              alt="стікер привіт"
            />
          </div>
        </div>
        <div id="logo">
          {(showText && (
            <motion.div
            animate={controls} variants={showVariants}
              className={"text-about"}
              style={{ width: "681.48px", height: "639px" }}
              onClick={() => {
                setShowText(false);
              }}
            >
              <p>{state?.logoText[1]}</p>
              <p>{state?.logoText[2]}</p>
              <p>{state?.logoText[3]}</p>
              <p>{state?.logoText[4]}</p>
              <p>{state?.logoText[5]}</p>
              <p>{state?.logoText[6]}</p>
              <img src={state?.logoHeartSignature} alt="" />
            </motion.div>
          )) ||
            (!showText && (
              <img
              onClick={()=>setShowText(true)}
                style={{ width: "auto", height: "100%" }}
                src="/img/Logo card.png"
                alt="logo card"
              />
            ))}

          <img
            className="sign"
            style={{ width: "325.89px", height: "287.16px" }}
            src={swithTheme? state?.logoSignature: "/img/Group 1000004159.png"}
            alt="Чому YAQ? Натискай картинку і дізнаєшся"
          />
        </div>
        <div id="values" style={swithTheme? {backgroundColor: "#FFFFFF"}: {backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
          <h2>{state?.aboutValues}</h2>
          <div className="list">
            <div>
              <img src="/img/1..png" alt="1" />
              <p>{state?.valuesList[1]}</p>
            </div>
            <div>
              <img src="/img/2..png" alt="2" />
              <p>{state?.valuesList[2]}</p>
            </div>
            <div>
              <img src="/img/3..png" alt="3" />
              <p>{state?.valuesList[3]}</p>
            </div>
            <div>
              <img src="/img/4..png" alt="4" />
              <p>{state?.valuesList[4]}</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footerBox" style={swithTheme? {backgroundColor: "#232323"}: {backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
          <div className="footerLeft">
            <img
              style={{ width: "177px", height: "62px" }}
              className="logo"
              src="/img/logo2.png"
              alt="logo"
            />
            <div className="values">
              <a href="#logo">{state?.aboutLogo}</a>
              <a href="#values">{state?.aboutValues}</a>
            </div>
            <div className="social">
              <p>{state?.socialSignature}</p>
              <div style={{ display: "flex", gap: "12px" }}>
                <a href="#">
                  <img
                    className="facebook"
                    src="/img/Facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a href="#">
                  <img src="/img/LinkedIn.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <p style={{ alignSelf: "end" }}>YAQ, 2024 © р.</p>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingPage;
