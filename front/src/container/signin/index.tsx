import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../global.scss"
import "./signin.scss";
import Divider from "../../component/divider";
import SocialLogin from "../../component/socialLogin";
import FieldPassword from "../../component/field-password";



const FIELD_NAME = {
  EMAIL: "email",
  PASSWORD: "password",
};

const FIELD_ERROR = {
  EMAIL: "Переконайтеся, що ви ввели свою електронну адресу правильно",
  PASSWORD:
    "Переконайтеся, що ви ввели свій пароль правильно",
};


const SignInPage: React.FC = () => {
  const navigate = useNavigate()

  const calculateIsFormValid = (errors: any) => {
    return Object.values(errors).every((error) => error === "");
  };
  
  const [isFormValid, setIsFormValid] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    [FIELD_NAME.EMAIL]: "",
    [FIELD_NAME.PASSWORD]: "",
  })

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    setError({
      ...error,
      [name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try {
      const res = await fetch("http://localhost:4000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await res.json();

          //-----------

          if (res.ok) {
          navigate("/");
          }

        } catch (err) {
          console.log(err)
      } 
    }
  

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
        <form className="form__container" onSubmit={handleSubmit}>
        <h2 className="title">Увійти</h2>       
        
        <div className="field">
          <label htmlFor="email">Електронна адреса</label>
        <input name="email" id="email" type="email" placeholder="Введіть вашу електронну адресу" />
        </div>
        <div className="field">
          

        <FieldPassword
            label={"Пароль"}
            value={user.password}
            onChange={handleChange}
            error={error.password}
            showPassword={showPassword}
            onTogglePassword={togglePasswordVisibility}
            placeholder="Введіть ваш пароль"
          />

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
