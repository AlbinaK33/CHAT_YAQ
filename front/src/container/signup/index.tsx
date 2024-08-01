import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../global.scss";
import "./signup.scss";
import Divider from "../../component/divider";
import SocialLogin from "../../component/socialLogin";
import FieldPassword from "../../component/field-password";
import FieldEmail from "../../component/field-email";
import FieldName from "../../component/field-name";

export const REG_EXP_EMAIL = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
export const REG_EXP_PASSWORD = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);


const FIELD_NAME = {
  NAME: "name",
  NICKNAME: "nickname",
  EMAIL: "email",
  PASSWORD: "password",
};

const FIELD_ERROR = {

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
    [FIELD_NAME.NAME]: "",
    [FIELD_NAME.NICKNAME]: "",
    [FIELD_NAME.EMAIL]: "",
    [FIELD_NAME.PASSWORD]: "",
  });

  const [error, setError] = useState({
    [FIELD_NAME.NICKNAME]: "",
    [FIELD_NAME.EMAIL]: "",
    [FIELD_NAME.PASSWORD]: "",
  })

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearForm = () => {
    setFormData({
      [FIELD_NAME.NAME]: "",
      [FIELD_NAME.NICKNAME]: "",
      [FIELD_NAME.EMAIL]: "",
      [FIELD_NAME.PASSWORD]: "",
    });
    setError({
      [FIELD_NAME.NICKNAME]: "",
      [FIELD_NAME.EMAIL]: "",
      [FIELD_NAME.PASSWORD]: "",
    });
  };

  const passwordRequirements = [
    {text: "Мінімум 8 символів", isMet: formData[FIELD_NAME.PASSWORD].length >= 8},
    {text: "Містить принаймні одну цифру", isMet: /\d/.test(formData[FIELD_NAME.PASSWORD]) },
    {text: "Без спеціальних символів (!$@%#&)", isMet: !/[!@$%#^&*]/.test(formData[FIELD_NAME.PASSWORD]) },
  ]

  const validate = (name: string, value: any) => {
  
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
    
    const errorMessage = validate(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });

    setError({
      ...error,
      [name]: errorMessage,
    });
    //=============================================

    const newIsFormValid = calculateIsFormValid({
      ...error,
    });
    setIsFormValid(newIsFormValid);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const isFormValid = calculateIsFormValid(error);

    if(isFormValid) {
      try {
        const {firstName, email, password} = formData;

        const res = await fetch("http://localhost:9999/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, email, password }),
          });

          // const data = await res.json();

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
        <FieldName 
          label="Ім'я"
          onChange={handleChange}
          value={formData.name}
          placeholder="Введіть ваше ім’я"
          />
        </div>


        <div className="field">
        <FieldEmail
        label="Електронна адреса" 
        onChange={handleChange}
        value={formData.email}
        error={error.email}
        placeholder="Введіть вашу електронну адресу"
        />
        </div>
        
        <FieldPassword
        label={"Пароль"}
        value={formData[FIELD_NAME.PASSWORD]}
        onChange={handleChange}
        error={error[FIELD_NAME.PASSWORD]}
        requirements={passwordRequirements}
        showPassword={showPassword}
        name={FIELD_NAME.PASSWORD}
        onTogglePassword={togglePasswordVisibility}
        placeholder="Створіть пароль" />

        <button className="button button--dark" type="submit"
        >Продовжити</button>
        </form>
      <div className="signin">
        <p className="text--small">
        У вас є обліковий запис?
        <a className="link" href="/signin">{" "}Увійти</a>
        </p>
      </div>
      </section>
    </div>
  );
};

export default SignUpPage;
