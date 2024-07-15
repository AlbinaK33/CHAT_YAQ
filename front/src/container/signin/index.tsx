import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../global.scss"
import "./signin.scss";
import Divider from "../../component/divider";
import SocialLogin from "../../component/socialLogin";
import FieldPassword from "../../component/field-password";
import FieldEmail from "../../component/field-email";



export const REG_EXP_EMAIL = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
export const REG_EXP_PASSWORD = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

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

    let errorMessage = "";

    switch(name) {
      case FIELD_NAME.EMAIL:
        errorMessage = value === "" ? "" : (!REG_EXP_EMAIL.test(value) ? FIELD_ERROR.EMAIL : "");
        break;
        case FIELD_NAME.PASSWORD:
          errorMessage = value === "" ? "" : (!REG_EXP_PASSWORD.test(value) ? FIELD_ERROR.PASSWORD : "");
          break;
      default:
        break;
    }

    setError({
      ...error,
      [name]: errorMessage,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!REG_EXP_PASSWORD.test(user.password)) {
      setError({
        ...error,
        [FIELD_NAME.PASSWORD]: FIELD_ERROR.PASSWORD,
      });
      return;
    }

    if(calculateIsFormValid(error)) {
      return;
    }



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

        <FieldEmail
        label="Електронна адреса" 
        onChange={handleChange}
        value={user.email}
        error={error.email}
        placeholder="Введіть вашу електронну адресу"
        />
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


        <section className="recovery">
        <span className="text--small">
        <a className="link" href="/">{" "}Забули пароль?</a>
        </span>
      </section>
        </div>
        
        </form>

        <div className="social-login--down">
        <button className="button button--dark" type="submit">Увійти</button>
        <Divider/>

        <SocialLogin />

        <p className="text--small">
        Не маєте облікового запису?
        <a className="link" href="/signup">{" "}Зареєструватися</a>
        </p>
        </div>

      
        
      </section>
    </div>
  );
};

export default SignInPage;
