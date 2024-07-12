import React from "react";
import { useState } from "react";
import "./field-nickname.scss"



interface NicknameProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    placeholder: string;
    error: string;
}

const FieldNickname: React.FC<NicknameProps> = ({
    value, 
    onChange,
    label,
    placeholder,
    error,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if(!value || value === "@") {
            setIsFocused(false);
            onChange(""); 
        }
    };


    const handleClear = () => {
        onChange("")
    };

    const inputClassName = `field__input ${error && value ? "input--error" : ""}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        const newValue = value.startsWith("@") ? value.slice(1) : value;
        onChange(`@${newValue}`);
    }

    const availableNicknames = ["nickname1", "nickname2", "nickname3"];
   

    return (
        <div>
            <div className="field">
          <label className="field__label">{label}</label>
        <input
        className={inputClassName} 
        type="text" 
        name="nickname" 
        value={isFocused ? value : value.replace(/^@/, "")} 
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span className={`field__icon ${value ? "clear" : ""}`} onClick={handleClear}></span>
        </div>
        <div>
        { 
            error && value && (
                <div className="blocks">
                    <div className="block__error">
                <img className="icon-error" src="./svg/danger.svg" alt="error" />
                <p><span className="form__error" id="emailError">  {error}</span></p>
                </div>

                <div className="suggestions">
                    <p>Вільний:</p>
                    {availableNicknames.map((nickname) => (
                        <span className="available-nickname">
                            {nickname}
                        </span>
                    ))}
                </div>
                </div>
            )
        }
        </div>
        
        </div>
    )
}

export default FieldNickname;