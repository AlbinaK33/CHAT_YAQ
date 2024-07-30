import React, { useState } from "react";
import "./field-code.scss"



interface CodeProps {
    value: string;
    onChange: (value: string) => void;
    error: string;
    label: string;
    placeholder: string;
    
}

const FieldCode: React.FC<CodeProps> = ({
    value, 
    onChange,
    error,
    label,
    placeholder,
}) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (/^\d*$/.test(inputValue) && inputValue.length <= 6) {
            
            onChange(inputValue);
        
        }
    }


    const handleClear = () => {
        onChange("")
    };

   
    const inputClassName = `field__input ${error && value  ? "input--error" : ""}`

    return (
        <div>
            <div className="field">
          <label className="field__label">{label}</label>
                 <input
                 className={inputClassName} 
                 name="code" 
                 value={value} 
                 type="number" 
                 placeholder={placeholder}
                 onChange={handleChange}
                 />
        <span className={`field__icon ${value ? "clear" : ""}`} onClick={handleClear}></span>
        </div>
        <div>
        { 
            error && value && (
                <div className="block__error">
                <img className="icon-error" src="./svg/danger.svg" alt="error" />
                <p><span className="form__error" id="codeError">  {error}</span></p>
                </div>
            )
        }
        </div>
        
        </div>
    )
}

export default FieldCode;