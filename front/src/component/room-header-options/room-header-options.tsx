import React from "react";
import "./index.scss";

const HeaderRight: React.FC = () => {
  return (
    <div key="options" className="options">
      <div key="rooms"className="rooms">
        <a href="#">
          <img src="/img/Badge notification.png" alt="rooms" />
        </a>
      </div>
      <div key="chat">
        <a href="#">
          {" "}
          <img src="/img/Badge notification(1).png" alt="chat" />
        </a>
      </div>
      <div key="saved">
        <a href="#">
          {" "}
          <img src="/img/Clear.png" alt="chat" />
        </a>
      </div>
      <div key="notifications">
        <a href="#">
          {" "}
          <img src="/img/Clear(1).png" alt="chat" />
        </a>
      </div>
        <div key="profile">
            <a href="#">
            {" "}
            <img src="/img/Avatar.png" alt="profile" />
            </a>
    </div>
    </div>
  );
};

export default HeaderRight;
