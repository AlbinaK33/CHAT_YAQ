import React, { useEffect, useMemo, useState } from "react";
import HeaderRight from "../../component/room-header-options/room-header-options";
import TextField from "@mui/material/TextField";
import "./index.scss";
import Room from "../../component/room-box/room";
const RoomPage: React.FC = () => {
  const [liked1, setliked1] = useState(false);
  const [liked2, setliked2] = useState(false);
  const [liked3, setliked3] = useState(false);
  const [liked4, setliked4] = useState(false);
  const [liked5, setliked5] = useState(false);
  const [liked6, setliked6] = useState(false);
  const [liked7, setliked7] = useState(false);
  const [liked8, setliked8] = useState(false);
  const [swithTheme, setSwithTheme] = useState(true);
  
    const rooms = useMemo(()=>[{
      index:1,
      liked: liked1,
      setLiked: setliked1,
      name: "Музика",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_phS37wg8cQg.png",
      styles: "571px"
    },
    {
      index:2,
      liked: liked2,
      setLiked: setliked2,
      name: "Фільми",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_gN1Vbk1Ymio.png",
      styles: "453px"
    },
    {
      index:3,
      liked: liked3,
      setLiked: setliked3,
      name: "Комп'ютерні ігри",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_VW2oU66mwbc.png",
      styles: "571px"
    },
    {
      index:4,
      liked: liked4,
      setLiked: setliked4,
      name: "Спорт",
      discussions: 0,
      members: 2,
      img: "/img/sport.png",
      styles: "336px"
    },
    {
      index:5,
      liked: liked5,
      setLiked: setliked5,
      name: "Читання",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_7Bgm-_Sn09c.png",
      styles: "453px"
    },
    {
      index:6,
      liked: liked6,
      setLiked: setliked6,
      name: "Колекціонування",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_Jz81wKsN3iM.png",
      styles: "453px"
    },
    {
      index:7,
      liked: liked7,
      setLiked: setliked7,
      name: "Подорожі",
      discussions: 0,
      members: 8,
      img: "/img/unsplash_0wMmxNB6Xzc.png",
      styles: "336px"
    },
    {
      index:8,  
      liked: liked8,
      setLiked: setliked8,
      name: "Кулінарія",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_rgRbqFweGF0.png",
      styles: "571px"
    }],
   [liked1, liked2, liked3, liked4, liked5, liked6, liked7, liked8]);
   const filteredRooms = useMemo(() => {
    const likedRooms = rooms.filter(room => room.liked);
    const unlikedRooms = rooms.filter(room => !room.liked);
    return [...likedRooms, ...unlikedRooms];
  }, [rooms]);
console.log(rooms);
  return (
    <div className={swithTheme ? "page" : "page-black"}>
      <header>
        <div className="left">
          <img
            style={{ width: "177px", height: "62px" }}
            src="/img/logo.png"
            alt="logo"
          />
          <div
            className="search"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              style={{
                position: "absolute",
                zIndex: 1,
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
              src="/img/search-normal.png"
              alt="search icon"
            />
            <TextField
              id="search-bar"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "24px",
                  color: "#A2A2A2",
                  backgroundColor: "#FAFAFA",
                  "& fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  color: "#A2A2A2",
                },
              }}
              placeholder="Пошук кімнати або обговорення"
              variant="outlined"
            />
          </div>
        </div>
        <HeaderRight />
      </header>
      <main>
        <div className="recent">
          <h2>Нещодавні</h2>
          <div className="info">
            <img src="/img/icons.png" alt="" />
            <p>0</p>
          </div>
        </div>
          {filteredRooms.map((room: {
            index: number;
            liked: boolean;
            setLiked: (liked: boolean) => void;
            name: string;
            discussions: number;
            members: number;
            img: string;
            styles: string;
          }) => (
            <Room
              index={room.index}
              liked={room.liked}
              setLiked={room.setLiked}
              name={room.name}
              discussions={room.discussions}
              members={room.members}
              img={room.img}
              styles={room.styles}
            />
          ))}
      </main>
    </div>
  );
};

export default RoomPage;
