import React from "react";
import "./index.scss";

const HeaderRight: React.FC = () => {
  return (
    <div className="options">
      <div className="rooms">
        <a href="#">
          <img src="/img/Badge notification.png" alt="rooms" />
        </a>
      </div>
      <div className="chat">
        <a href="#">
          {" "}
          <img src="/img/Badge notification(1).png" alt="chat" />
        </a>
      </div>
      <div className="saved">
        <a href="#">
          {" "}
          <img src="/img/Clear.png" alt="chat" />
        </a>
      </div>
      <div className="notifications">
        <a href="#">
          {" "}
          <img src="/img/Clear(1).png" alt="chat" />
        </a>
      </div>
        <div className="profile">
            <a href="#">
            {" "}
            <img src="/img/Avatar.png" alt="profile" />
            </a>
    </div>
    </div>
  );
};

export default HeaderRight;
