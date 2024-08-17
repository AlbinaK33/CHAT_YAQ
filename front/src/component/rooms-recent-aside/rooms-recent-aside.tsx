import { TextField } from "@mui/material"
import RoomRecentSmall from "../room-recent-small/room-recent-small";

interface RoomRecentSmallProps {
    smallRooms: typeof RoomRecentSmall[];
}

const RoomsRecentAside: React.FC<RoomRecentSmallProps> = (...smallRooms) => {
    return(
    <aside className="left">
        <div className="top">
          <img className="logo" src="/img/logo2.png" alt="logo" />
          <div className="search">
            <img
              style={{
                position: "absolute",
                zIndex: 3,
                left: "16px",
                top: "46%",
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
                  width: "336px",
                  height: "44px",
                  borderRadius: "24px",
                  padding: "24px 4px 24px 30px",
                  color: "#A2A2A2",
                  backgroundColor: "#404040",
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
              placeholder="Пошук кімнати"
              variant="outlined"
            />
          </div>
        </div>
        <div className="bottom">
          <div className="recent">
            <img src="/img/Image.png" alt="recent" />
            <div className="recent-text">
              <h3>Нещодавні</h3>
              <div className="info">
                <img src="/img/firstline.png" alt="" />
                <p>0</p>
              </div>
            </div>
          </div>
{smallRooms.map((room) => <RoomRecentSmall name={room.name} key={room.index} index={room.index} liked={room.liked} setLiked={room.setLiked} discussions={room.discussions} members={room.members} img={room.img} styles={room.styles}/>)}
        </div>
      </aside>
    )
}
export default RoomsRecentAside