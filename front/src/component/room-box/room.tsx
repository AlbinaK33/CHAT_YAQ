import "./index.scss";

interface RoomProps {
  que: number;
  setQue: (que: number) => void;
  name: string;
  discussions: number;
  members: number;
  img: string;
  styles: string;
}

const Room: React.FC<RoomProps> = ({
  que,
  setQue,
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
        <button
          onClick={() => {
           que===-1? setQue(0): setQue(-1);
          }}
        >
          {que===-1 ? (
            <img className="heart-button" src="/img/Secondary.png" alt="" />
          ) : (
            <img className="heart-button" src="/img/Secondary(1).png" alt="" />
          )}
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
