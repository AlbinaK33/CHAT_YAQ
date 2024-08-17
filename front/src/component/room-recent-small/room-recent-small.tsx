import React from "react";
import "./index.scss";
interface RoomRecentSmallProps {
  index: number;
  liked: number;
  setLiked: (liked: number) => void;
  name: string;
  discussions: number;
  members: number;
  img: string;
  styles: string;
}
const RoomRecentSmall: React.FC<RoomRecentSmallProps> = ({
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
    <div className="element">
      <img src={img} alt={"room" + name} />
      <div className="element-right">
        <div className="info">
          <p>{name}</p>
          <div className="info-group">
            <div className="group1">
              <img src="/img/firstline.png" alt="" />
              <p>{discussions}</p>
            </div>
            <div className="group2">
              <img src="/img/profile-2user.png" alt="" />
              <p>{members}</p>
              <div />
            </div>
          </div>
        </div>
        <button onClick={() => liked<0?setLiked(Date.now()): setLiked(-Date.now())}>
          {liked<0 ? (
            <img className="heart-button" src="/img/Secondary.png" alt="" />
          ) : (
            <img className="heart-button" src="/img/Secondary(1).png" alt="" />
          )}
        </button>
      </div>
    </div>
  );
};

export default RoomRecentSmall;
