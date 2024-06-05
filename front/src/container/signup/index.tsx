import { useContext } from "react";

import "./index.scss";
import { useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  //   const authContext = useContext(AuthContext);
  //   const navigate = useNavigate();

  return (
    <div className="page">
      <aside className="page__section">
        <div>
          <img src="img/logo.png" alt="logo" className="logo" />
        </div>
        <div><h1 className="title">Захоплюючі розмови на теми, що вас цікавлять!</h1></div>
        <p className="text">Наш чат створений для того, щоб об'єднати людей з різними  інтересами і допомогти відкривати нові хобі!</p>
      </aside>
      <form className="page__section">Form</form>
    </div>
  );
};

export default SignUpPage;
