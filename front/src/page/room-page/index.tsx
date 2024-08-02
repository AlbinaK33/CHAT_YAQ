import React, { useEffect, useMemo, useState } from "react";
import HeaderRight from "../../component/room-header-options/room-header-options";
import TextField from "@mui/material/TextField";
import "./index.scss";
import Room from "../../component/room-box/room";
const RoomPage: React.FC = () => {
  const [que1, setQue1] = useState(-1);
  const [que2, setQue2] = useState(-1);
  const [que3, setQue3] = useState(-1);
  const [que4, setQue4] = useState(-1);
  const [que5, setQue5] = useState(-1);
  const [que6, setQue6] = useState(-1);
  const [que7, setQue7] = useState(-1);
  const [que8, setQue8] = useState(-1);
  const [swithTheme, setSwithTheme] = useState(true);
  
  const filteredRooms = useMemo(() => {
    const rooms = [{
      que: que1,
      setQue: setQue1,
      name: "Музика",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_phS37wg8cQg.png",
      styles: "571px"
    },
    {
      que: que2,
      setQue: setQue2,
      name: "Фільми",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_gN1Vbk1Ymio.png",
      styles: "453px"
    },
    {
      que: que3,
      setQue: setQue3,
      name: "Комп'ютерні ігри",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_VW2oU66mwbc.png",
      styles: "571px"
    },
    {
      que: que4,
      setQue: setQue4,
      name: "Спорт",
      discussions: 0,
      members: 2,
      img: "/img/sport.png",
      styles: "336px"
    },
    {
      que: que5,
      setQue: setQue5,
      name: "Читання",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_7Bgm-_Sn09c.png",
      styles: "453px"
    },
    {
      que: que6,
      setQue: setQue6,
      name: "Колекціонування",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_Jz81wKsN3iM.png",
      styles: "453px"
    },
    {
      que: que7,
      setQue: setQue7,
      name: "Подорожі",
      discussions: 0,
      members: 8,
      img: "/img/unsplash_0wMmxNB6Xzc.png",
      styles: "336px"
    },
    {
      que: que8,
      setQue: setQue8,
      name: "Кулінарія",
      discussions: 0,
      members: 9,
      img: "/img/unsplash_rgRbqFweGF0.png",
      styles: "571px"
    }];
    return [...rooms.filter((room) => room.que === 0), ...rooms.filter((room) => room.que === -1)];
  }, [que1, que2, que3, que4, que5, que6, que7, que8]);
  useEffect(() => {
    filteredRooms.map((room: {
      que: number;
      setQue: (que: number) => void;
      name: string;
      discussions: number;
      members: number;
      img: string;
      styles: string;
    }) => (
      <Room
        que={room.que}
        setQue={room.setQue}
        name={room.name}
        discussions={room.discussions}
        members={room.members}
        img={room.img}
        styles={room.styles}
      />
    ))
  }, [filteredRooms, que1, que2, que3, que4, que5, que6, que7, que8]);
  console.log(filteredRooms);
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
            que: number;
            setQue: (que: number) => void;
            name: string;
            discussions: number;
            members: number;
            img: string;
            styles: string;
          }) => (
            <Room
              que={room.que}
              setQue={room.setQue}
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
