import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../global.scss"
import "./recovery.scss";
import Divider from "../../component/divider";
import FieldEmail from "../../component/field-email";
import LoadingButton from "../../component/loading-button";



export const REG_EXP_EMAIL = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);

const FIELD_NAME = {
  EMAIL: "email",
};

const FIELD_ERROR = {
  EMAIL: "Переконайтеся, що ви ввели свою електронну адресу правильно",
};


const RecoveryPage: React.FC = () => {
  const navigate = useNavigate()

  const calculateIsFormValid = (errors: any) => {
    return Object.values(errors).every((error) => error === "");
  };
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [user, setUser] = useState({
    email: "",
  });

  const [error, setError] = useState({
    [FIELD_NAME.EMAIL]: "",
  })

 
 

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
    <div className="page--recovery">
    
        <div>
          <img src="img/logo.png" alt="logo" className="logo" />
        </div>
        
      <section className="page__section form__section">
        
        <form className="form__container" onSubmit={handleSubmit}>


          <div className="text__section">          
        <h2 className="title">Не вдається ввійти?</h2>
        <p className="text--light" >Укажіть електронну адресу і ми надішлемо вам код для відновлення доступу до облікового запису</p>   
          </div>

        
        <div className="field">

        <FieldEmail
        label="Електронна адреса" 
        onChange={handleChange}
        value={user.email}
        error={error.email}
        placeholder="Введіть вашу електронну адресу"
        />

        <section className="recovery">
        <span className="text--small">
        <a className="link" href="/recovery">{" "}Не вдається відновити доступ?</a>
        </span>
      </section>

        </div>
        
        </form>

        <div className="social-login--down">
        <LoadingButton
        className="button button--dark"
        isLoading={isSubmitting}
        text="Надіслати посилання"
        type="submit"
        />
        <Divider/>


        <a style={{textDecoration: 'none'}} className="text--small" href="/signup">
        Створити обліковий запис
        </a>
        </div>

      
        
      </section>
    </div>
  );
};

export default RecoveryPage;
