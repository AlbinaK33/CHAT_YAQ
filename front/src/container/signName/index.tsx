import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

import "../../global.scss"
import "./signName.scss";



const SignNamePage: React.FC = () => {
  //   const authContext = useContext(AuthContext);
  //   const navigate = useNavigate();

  return (
    <div className="page--sign-in">
      <aside className="page__section">
        <div>
          <img src="img/logo.png" alt="logo" className="logo" />
        </div>
        <div><h1 className="title text">Захоплюючі розмови на теми, що вас цікавлять!</h1>
        <p className="text">Наш чат створений для того, щоб об'єднати людей з різними  інтересами і допомогти відкривати нові хобі!</p></div>
        <div>
          <img src="img/mcbook.png" alt="mcbook" className="aside_img" />
        </div>
      </aside>
      <section className="page__section form__section">
        <form className="form__container">
        <h2 className="title">Нікнейм користувача</h2>       
        <div className="text__section">
        <p className="text--light">
            Завядки нікнейму люди зможуть швидко вас знаходити, не потребуючи інших ваших данних.
        </p>
        <p className="text--light">
        Ви можете використовувати a-z, 0-9 і підкреслення. Мінімальна довжина – 5 символів.
        </p>
        </div>
        <div className="field">
          <label htmlFor="nickname">Нікнейм</label>
        <input name="nickname" id="nickname" type="text" placeholder="Введіть ваш @нікнейм" />
        </div>
        
        <div className="privacy-policy">
            <p>Реєструючись, ви приймаєте наші <a href="/" className="link--privacy-policy">
            Умови і Політику конфіденційності</a></p>
        </div>

        <button className="button button--dark" type="submit">Зареєструватися</button>
        </form>

        
      </section>
    </div>
  );
};

export default SignNamePage;
