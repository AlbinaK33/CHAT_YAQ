// import { useRef, useState } from "react";
import "./index.scss";
import LikedButton from "../liked-button/liked-button";

interface RoomProps {
  index: number;
  liked: number;
  setLiked: (liked: number) => void;
  name: string;
  discussions: number;
  members: number;
  img: string;
  styles: string;
}

const Room: React.FC<RoomProps> = ({
  index,
  liked,
  setLiked,
  name,
  discussions,
  members,
  img,
  styles,
}) => {
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
        <LikedButton liked={liked} setLiked={setLiked} />
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
