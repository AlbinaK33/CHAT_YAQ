import React, { useEffect, useMemo } from "react";
import "./index.scss";
import { useState } from "react";
import SwitchTheme from "../../component/SwitchTheme";
import {  AnimatePresence, motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { animationImgComponent } from "../../component/onboarding-animations/animationImgComponent";
import { animationAncherComponent } from "../../component/onboarding-animations/animationAncherComponent";
import { animationbuttonComponent } from "../../component/onboarding-animations/animationbuttonComponent";
import { animationPComponent } from "../../component/onboarding-animations/animationPComponent";
import SwitchLanguage from "../../component/switch-language";
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
  const log = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.id === "sign-up") {
      navigate("/signup");
    } else {
      navigate("/signin");
    }
  };
  const textVariants = {
    light: { x: 0, transition: { ease: "easeInOut", duration: 0.3 } },
    dark: { x: -25, transition: { ease: "easeInOut", duration: 0.3 } },
  };
  const controls = useAnimation();
  useEffect(() => {
    if (!swithTheme ) {
      controls.start("dark");
    } else if (swithTheme) {
      controls.start("light");
    }
  }, [swithTheme, controls, language]);
  
  
  
  return (
    <div className={swithTheme ? "page" : "page-black"}>
      <header>
        <div className="left">
          <img
            src={swithTheme ? "/img/logo.png" : "/img/logo2.png"}
            alt="Logo"
          />

          {animationAncherComponent("-logo", "#logo", state?.aboutLogo, language)}
          {animationAncherComponent("-values", "#values", state?.aboutValues, language)}
        </div>
        <div className="right">
          <div className="switches">
          <SwitchLanguage language={language} setLanguage={setLanguage } swithTheme={swithTheme} />
          <SwitchTheme
              onChange={() => {
                setSwithTheme(!swithTheme);
              }}
              isSwitchOn={swithTheme}
            />
          </div>
          <div className="log">
            {animationbuttonComponent("-logIn", "log-in", log, state?.signUp, language)}
            {animationbuttonComponent("-signUp", "sign-up", log, state?.logIn, language)}
          </div>
        </div>
      </header>
      <main>
        <div className="intro">
          <div className="forStickerPlacing">
            {animationImgComponent(
              "sticker2",
              { height: "158px", width: "191.95px", alignSelf: "center" },
              state?.sticker2,
              "стікер чат", language
            )}

            <motion.div
              className="text"
              animate={controls}
              variants={textVariants}
            >
              <AnimatePresence mode="popLayout">
        <motion.h1
          key={language + "-chatPlatform"}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2, ease: "linear" },
          }}
          exit={{ opacity: 0}}
        >
                {" "}
                <span >
                  {state?.chatPlatformSpan}
                </span>{" "}
                {state?.chatPlatform}
        </motion.h1>
      </AnimatePresence>
             
              {animationPComponent("-description", state?.description, language)}
            </motion.div>
            {animationImgComponent(
              "sticker1",
              {
                height: "153.79px",
                width: "268.48px",
                marginTop: "-100px",
                marginLeft: "-100px",
                alignSelf: "flex-start",
              },
              state?.sticker1,
              "стікер привіт", language
            )}
          </div>
        </div>
        <div id="logo">
        {
            
            (showText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={"text-about"}
                style={{ width: "681.48px", height: "639px" }}
                onClick={() => {
                  setShowText(false);
                }}
              >
                {animationPComponent("-1", state?.logoText[1], language)}
                {animationPComponent("-2", state?.logoText[2], language)}
                {animationPComponent("-3", state?.logoText[3], language)}
                {animationPComponent("-4", state?.logoText[4], language)}
                {animationPComponent("-5", state?.logoText[5], language)}
                {animationPComponent("-6", state?.logoText[6], language)}
                {animationImgComponent(
                  "sign",
                  { width: "auto", height: "auto" },
                  state?.logoHeartSignature,
                  "Чому YAQ? Натискай картинку і дізнаєшся", language
                )}
              </motion.div>
            )) ||
              (!showText && (
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onClick={() => setShowText(true)}
                  style={{ width: "auto", height: "100%" }}
                  src="/img/Logo card.png"
                  alt="logo card"
                />
              ))}
          {animationImgComponent(
            "sign",
            { width: "325.89px", height: "287.16px" },
            swithTheme ? state?.logoSignature : "/img/Group 1000004159.png",
            "Чому YAQ? Натискай картинку і дізнаєшся", language
          )}
        </div>
        <motion.div
          id="values"
          style={
            swithTheme
              ? { backgroundColor: "#FFFFFF" }
              : { backgroundColor: "rgba(255, 255, 255, 0.1)" }
          }
        >
          <h2>{state?.aboutValues}</h2>
          <div className="list">
            <div>
              <img src="/img/1..png" alt="1" />
              {animationPComponent("-1", state?.valuesList[1], language)}
            </div>
            <div>
              <img src="/img/2..png" alt="2" />
              {animationPComponent("-2", state?.valuesList[2], language)}
            </div>
            <div>
              <img src="/img/3..png" alt="3" />
              {animationPComponent("-3", state?.valuesList[3], language)}
            </div>
            <div>
              <img src="/img/4..png" alt="4" />
              {animationPComponent("-4", state?.valuesList[4], language)}
            </div>
          </div>
        </motion.div>
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
              {animationAncherComponent("-logo", "#logo", state?.aboutLogo, language)}
              {animationAncherComponent(
                "-values",
                "#values",
                state?.aboutValues, language
              )}
            </div>
            <div className="social">
              <motion.p>{state?.socialSignature}</motion.p>
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
