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
      </aside>
      <form className="page__section">Form</form>
    </div>
  );
};

export default SignUpPage;
