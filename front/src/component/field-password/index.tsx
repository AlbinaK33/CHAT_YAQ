import React from "react";

import "./field-password.scss"

interface Requirement {
    text: string;
    isMet: boolean;
}

interface PasswordProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
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
    return (
        <div>
            <div className="field">
          <label className="field__label">{label}</label>
        <input
        className={`field__input ${error ? "input--error" : ""}`} 
        name="password" 
        value={value} 
        type={showPassword ? "text" : "password"} placeholder={placeholder} 
        onChange={onChange}
        />
        <span className={`field__icon ${showPassword ? "show" : ""}`}
        onClick={onTogglePassword}></span>
        </div>
        <div>
        { requirements ? (
            <div className="password-requirements">
            {requirements.map((req, index) => (
                <div key={index} className="requirement">
                <img src={req.isMet ? "./svg/requirement-success.svg" : "./svg/requirement-error.svg"} alt={req.isMet ? "Success" : "Error"} />
                <span>{req.text}</span>
            </div>
            ))}
        </div>
        ) : (
            error && (
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