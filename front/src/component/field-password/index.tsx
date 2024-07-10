import React from "react";
import { useState } from "react";

import "./field-password.scss"

interface Requirement {
    text: string;
    isMet: boolean;
}

interface PasswordProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    requirements?: Requirement[];
    showPassword: boolean;
    placeholder: string;
    label: string;
    onTogglePassword: () => void;
    
}

const FieldPassword: React.FC<PasswordProps> = ({
    value, 
    onChange,
    error,
    requirements,
    showPassword,
    onTogglePassword,
    placeholder,
    label,
}) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (value === "") {
            setIsFocused(false)
        }
    };

   

    const showError = !requirements && error;
    const inputClassName = `field__input ${showError ? "input--error" : ""} ${requirements ? "input--no-error" : ""}`

    return (
        <div>
            <div className="field">
          <label className="field__label">{label}</label>
        <input
        className={inputClassName} 
        name="password" 
        value={value} 
        type={showPassword ? "text" : "password"} placeholder={placeholder} 
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
        <span className={`field__icon hide ${showPassword ? "show" : ""} `}
        onClick={onTogglePassword}></span>
        </div>
        <div>
        { requirements && isFocused ? (
            <div className="password-requirements">
            {requirements.map((req, index) => (
                <div key={index} className="requirement">
                <img src={req.isMet ? "./svg/requirement-success.svg" : "./svg/requirement-error.svg"} alt={req.isMet ? "Success" : "Error"} />
                <span>{req.text}</span>
            </div>
            ))}
        </div>
        ) : (
            showError && (
                <div className="block__error">
                <img className="icon-error" src="./svg/danger.svg" alt="error" />
                <p><span className="form__error" id="passwordError">  {error}</span></p>
                </div>
            )
        )}
        </div>
        
        </div>
    )
}

export default FieldPassword;