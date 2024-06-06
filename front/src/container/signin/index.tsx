import React from "react";

import "../../global.scss"
import "./signin.scss";
import Divider from "../../component/divider";
import SocialLogin from "../../component/socialLogin";


const SignInPage: React.FC = () => {
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
        <h2 className="title">Увійти</h2>       
        
        <div className="field">
          <label htmlFor="email">Електронна адреса</label>
        <input name="email" id="email" type="email" placeholder="Введіть вашу електронну адресу" />
        </div>
        <div className="field">
          <label htmlFor="password">Пароль</label>
        <input name="password" id="password" type="password" placeholder="Введіть ваш пароль" />

        <div className="recovery">
        <p className="text--small">
        <a className="link" href="/">{" "}Забули пароль?</a>
        </p>
      </div>
        </div>
        
        </form>

        <div className="social-login--down">
        <button className="button button--dark" type="submit">Увійти</button>
        <Divider/>

        <SocialLogin />

        <p className="text--small">
        Не маєте облікового запису?
        <a className="link" href="/">{" "}Зареєструватися</a>
        </p>
        </div>

      
        
      </section>
    </div>
  );
};

export default SignInPage;
