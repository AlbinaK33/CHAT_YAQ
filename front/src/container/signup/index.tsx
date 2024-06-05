import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../../global.scss"
import "./index.scss";


const SignUpPage: React.FC = () => {
  //   const authContext = useContext(AuthContext);
  //   const navigate = useNavigate();

  return (
    <div className="page">
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
        <h2 className="title">Зареєструватися</h2>
        
        <div className="field">
          <label htmlFor="firstname">Ім'я</label>
        <input name="firstname" id="firstname" type="text" placeholder="Введіть ваше ім’я" />
        </div>
        <div className="field">
          <label htmlFor="email">Електронна адреса</label>
        <input name="email" id="email" type="email" placeholder="Введіть вашу електронну адресу" />
        </div>
        <div className="field">
          <label htmlFor="password">Пароль</label>
        <input name="password" id="password" type="password" placeholder="Створіть пароль" />
        </div>
        <button className="button button--dark" type="submit">Продовжити</button>
        </form>
      <div className="signin">
        <p className="text--small">
        У вас є обліковий запис?
        <a className="link" href="/">{" "}Увійти</a>
        </p>
      </div>
      </section>
    </div>
  );
};

export default SignUpPage;
