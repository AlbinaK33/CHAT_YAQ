import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../global.scss"
import "./timezone.scss";
import FieldTimezone from "../../component/field-timezone";
import LoadingButton from "../../component/loading-button";


const FIELD_NAME = {
  TIMEZONE: "timezone",
};


const TimezonePage: React.FC = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    [FIELD_NAME.TIMEZONE]: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const clearForm = () => {
    setFormData({
      [FIELD_NAME.TIMEZONE]: "",
    });
    setError(null);
  };


  const handleChange = (value: string) => {

    setFormData({
      ...formData,
      [FIELD_NAME.TIMEZONE]: value,
    });

  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    if(formData[FIELD_NAME.TIMEZONE]) {
      try {
        const { timezone } = formData;

        const res = await fetch("http://localhost:9999/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ timezone }),
          });

          // const data = await res.json();

          //-----------

          if (res.ok) {
            clearForm();
          navigate("/signup-confirm");
          } else {
            const errorData = await res.json();
            setError(errorData.message || "Щось пішло не так.");
          }

        } catch (err) {
          setError("Помилка з'єднання. Спробуйте ще раз.");
          console.error(err);
      } 
    } else {
      setError("Часовий пояс не вибрано.");
      setIsSubmitting(false);
    }
  }

  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
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
        <form className="form__container" onSubmit={handleSubmit}>
        <h2 className="title"> Часовий пояс</h2>       
        <div className="text__section">
        <p className="text--light">
        Вкажіть ваш часовий пояс, щоб ми могли налаштувати час повідомлень відповідно до вашого місцевого часу.
        </p>
        </div>
        <div className="field">

          <FieldTimezone 
          label="Часовий пояс" 
          placeholder="Оберіть свій часовий пояс" 
          onChange={handleChange} 
          value={formData[FIELD_NAME.TIMEZONE]} />
        </div>

        {error && <p className="error-message">{error}</p>}
        
        <div className="privacy-policy">
            <p>Реєструючись, ви приймаєте наші{" "}<a href="/" className="link--privacy-policy">
            Умови і Політику конфіденційності</a></p>
        </div>

        <LoadingButton
        className="button button--dark"
        isLoading={isSubmitting}
        onClick={handleClick}
        text="Зареєструватися"
        type="submit"
        />
        
        </form>

        
      </section>
    </div>
  );
};

export default TimezonePage;
