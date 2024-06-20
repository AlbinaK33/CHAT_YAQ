import React from "react";
import "./index.scss";
function SwitchTheme({ onChange, isSwitchOn }: { onChange: () => void, isSwitchOn: boolean }) {
  console.log(isSwitchOn);
  return (
    <label className="switch" onChange={onChange}>
      <input onChange={onChange} type="checkbox" />
        {" "}
        <span className="slider">
          {isSwitchOn  ? (
            <img className="switchIcon"
              style={{ width: "24px", height: "24px", backgroundColor: "#FAFAFA"}}
              src="/img/sun.png"
              alt="light theme icon"
            />
          ) : (
            <img className="switchIconDark"
              style={{ width: "24px", height: "24px", backgroundColor: "rgba(250, 250, 250, 0.1)"}}
              src="/img/switchIconDark.png"
              alt="dark theme icon"
            />
          )}
        </span>
    </label>
  );
}

export default SwitchTheme;
