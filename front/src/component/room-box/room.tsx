import React, { useState } from "react";
import "./index.scss";
interface RoomProps {
  name: string;
  liked: boolean;
  discussions: number;
  members: number;
  img: string;
  styles: string;
}

const Room: React.FC<RoomProps> = ({
  name,
  liked,
  discussions,
  members,
  img,
  styles,
}
) => {

  const [handleLiked, setHandleLiked] = useState(false);

  return (
    <div
      className={"element"}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: styles,
      }}
    >
      <div>
        <button onClick={()=>setHandleLiked(!handleLiked)}> 
          {" "}
          {
            !handleLiked?<img className="heart-button"src="/img/Secondary.png" alt="" />: <img className="heart-button" src="/img/Secondary(1).png" alt="" />
          }
          
        </button>
        <h2>{name}</h2>
        <div className="info">
          <div className="group">
            <img src="/img/firstline.png" alt="" />
            <p>{discussions}</p>
          </div>
          <div className="group">
            <img src="/img/profile-2user.png" alt="" />
            <p>{members}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
