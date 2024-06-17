import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../global.scss";
import "./signup.scss";
import Divider from "../../component/divider";
import SocialLogin from "../../component/socialLogin";
import FieldPassword from "../../component/field-password";

export const REG_EXP_EMAIL = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
export const REG_EXP_PASSWORD = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);


const FIELD_NAME = {
  EMAIL: "email",
  PASSWORD: "password",
};

const FIELD_ERROR = {
  IS_SMALL: "Мінімум 8 символів",
  IS_NUMBER: "Містить принаймні одну цифру",
  IS_SYMBOL: "Без спеціальних символів (!$@%#&)",

  EMAIL: "Переконайтеся, що ви ввели свою електронну адресу правильно",
  PASSWORD:
    "Переконайтеся, що ви ввели свій пароль правильно",
};


const SignUpPage: React.FC = () => {

  const navigate = useNavigate()

  const calculateIsFormValid = (errors: any) => {
    return Object.values(errors).every((error) => error === "");
  };
  
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    [FIELD_NAME.EMAIL]: "",
    [FIELD_NAME.PASSWORD]: "",
  });

  const [error, setError] = useState({
    [FIELD_NAME.EMAIL]: "",
    [FIELD_NAME.PASSWORD]: "",
  })

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearForm = () => {
    setFormData({
      [FIELD_NAME.EMAIL]: "",
      [FIELD_NAME.PASSWORD]: "",
    });
    setError({
      [FIELD_NAME.EMAIL]: "",
      [FIELD_NAME.PASSWORD]: "",
    });
  };

  const validate = (name: string, value: any) => {
    if (!/\d/.test(String(value))) {
      return FIELD_ERROR.IS_NUMBER;
    }
    if (String(value).length < 8) {
      return FIELD_ERROR.IS_SMALL;
    }
    if (/[!$@%#&]/.test(String(value))) {
      return FIELD_ERROR.IS_SYMBOL;
    }
    if (name === FIELD_NAME.EMAIL) {
      if (!REG_EXP_EMAIL.test(String(value))) {
        return FIELD_ERROR.EMAIL;
      }
    }
    if (name === FIELD_NAME.PASSWORD) {
      if (!REG_EXP_PASSWORD.test(String(value))) {
        return FIELD_ERROR.PASSWORD;
      }
    }
    return "";
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const errorMess = validate(name, value);
    setError({ ...error, [name]: errorMess });
    //=============================================

    const newIsFormValid = calculateIsFormValid({
      ...error,
      [name]: errorMess,
    });
    setIsFormValid(newIsFormValid);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const isFormValid = calculateIsFormValid(error);

    if(isFormValid) {
      try {
        const {email, password} = formData;

        const res = await fetch("http://localhost:9999/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
          });

          const data = await res.json();

          //-----------

          if (res.ok) {
            clearForm();
          navigate("/signup-confirm");
          }

        } catch (err) {
          console.log(err)
      } 
    }
  };




  return (
    <div className="page--sign-up">
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
        <h2 className="title">Зареєструватися</h2>

        <SocialLogin/>

        <Divider/>
        
        <div className="field">
          <label htmlFor="firstname">Ім'я</label>
        <input name="firstname" id="firstname" type="text" placeholder="Введіть ваше ім’я" />
        </div>
        <div className="field">
          <label htmlFor="email">Електронна адреса</label>
        <input name="email" id="email" type="email" placeholder="Введіть вашу електронну адресу" />
        </div>
        
        <FieldPassword
        label={"Пароль"}
        value={formData[FIELD_NAME.PASSWORD]}
        onChange={handleChange}
        error={error[FIELD_NAME.PASSWORD]}
        showPassword={showPassword}
        onTogglePassword={togglePasswordVisibility}
        placeholder="Створіть пароль" />

        <button className="button button--dark" type="submit"
        >Продовжити</button>
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
