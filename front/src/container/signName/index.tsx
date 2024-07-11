import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

import "../../global.scss"
import "./signName.scss";
import FieldNickname from "../../component/field-nickname";


export const REG_EXP_NICKNAME = new RegExp(/^[A-Za-z0-9]+([A-Za-z0-9]*|[._-]?[A-Za-z0-9]+)*$/);

const FIELD_NAME = {
  NICKNAME: "nickname",
};

const FIELD_ERROR = {

  NICKNAME: "Цей нікнейм використовується. Спробуйте інший",
};



const SignNamePage: React.FC = () => {
  //   const authContext = useContext(AuthContext);


  // const navigate = useNavigate()

  const calculateIsFormValid = (errors: any) => {
    return Object.values(errors).every((error) => error === "");
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    [FIELD_NAME.NICKNAME]: "",
  });

  const [error, setError] = useState({
    [FIELD_NAME.NICKNAME]: "",
  })

  const clearForm = () => {
    setFormData({
      [FIELD_NAME.NICKNAME]: "",
    });
    setError({
      [FIELD_NAME.NICKNAME]: "",
    });
  };

  const validate = (name: string, value: any) => {
  
    if (name === FIELD_NAME.NICKNAME) {
      if (!REG_EXP_NICKNAME.test(String(value))) {
        return FIELD_ERROR.NICKNAME;
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

          <FieldNickname label="Нікнейм" placeholder="Введіть ваш @нікнейм" onChange={handleChange} value={formData.nickname} />

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
