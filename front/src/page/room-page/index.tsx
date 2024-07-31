import React, { useState } from "react";
import HeaderRight from "../../component/room-header-options/room-header-options";
import TextField from "@mui/material/TextField";
import "./index.scss";
import Room from "../../component/room-box/room";
const RoomPage: React.FC = () => {
  const [swithTheme, setSwithTheme] = useState(true);

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
        <Room
          img="/img/unsplash_phS37wg8cQg.png"
          name="Музика"
          liked={false}
          discussions={0}
          members={9}
          styles={"571px"}
        />
        <Room
          img="/img/unsplash_gN1Vbk1Ymio.png"
          name="Фільми"
          liked={false}
          discussions={0}
          members={9}
          styles={"453px"}
        />
        <Room
          img="/img/unsplash_VW2oU66mwbc.png"
          name="Комп'ютерні ігри"
          liked={false}
          discussions={0}
          members={9}
          styles={"571px"}
        />
        <Room
          name="Спорт"
          img="/img/sport.png"
          liked={false}
          discussions={0}
          members={2}
          styles={"336px"}
        />
        <Room
          img="/img/unsplash_7Bgm-_Sn09c.png"
          name="Читання"
          liked={false}
          discussions={0}
          members={9}
          styles={"453px"}
        />
        <Room
          img="/img/unsplash_Jz81wKsN3iM.png"
          name="Колекціонування"
          liked={false}
          discussions={0}
          members={9}
          styles={"453px"}
        />
        <Room
          img="/img/unsplash_0wMmxNB6Xzc.png"
          name="Подорожі"
          liked={false}
          discussions={0}
          members={8}
          styles={"336px"}
        />
        <Room
          img="/img/unsplash_rgRbqFweGF0.png"
          name="Кулінарія"
          liked={false}
          discussions={0}
          members={9}
          styles={"571px"}
        />
      </main>
    </div>
  );
};

export default RoomPage;
