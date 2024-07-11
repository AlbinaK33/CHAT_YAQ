import React from "react";
import "./field-nickname.scss"



interface NicknameProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    placeholder: string;
    
}

const FieldNickname: React.FC<NicknameProps> = ({
    value, 
    onChange,
    label,
    placeholder,
}) => {




    const handleClear = () => {
        onChange({ target: { name: "name", value: ''} } as React.ChangeEvent<HTMLInputElement>)
    };

   

    return (
        <div>
            <div className="field">
          <label className="field__label">{label}</label>
        <input
        className="field__input" 
        name="name" 
        value={value} 
        type="text" 
        placeholder={placeholder}
        onChange={onChange}
        />
        <span className={`field__icon ${value ? "clear" : ""}`} onClick={handleClear}></span>
        </div>
        <div>
       
        </div>
        
        </div>
    )
}

export default FieldNickname;