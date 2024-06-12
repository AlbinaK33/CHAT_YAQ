import React from "react";

interface PasswordProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    showPassword: boolean;
    placeholder: string;
    label: string;
    onTogglePassword: () => void;
    
}

const FieldPassword: React.FC<PasswordProps> = ({
    value, 
    onChange,
    error,
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
        className={`field__input ${error ? "field--error" : ""}`} 
        name="password" 
        value={value} 
        type={showPassword ? "text" : "password"} placeholder={placeholder} 
        onChange={onChange}
        />
        <span className={`field__icon ${showPassword ? "show" : ""}`}
        onClick={onTogglePassword}></span>
        </div>
        <span className="form__error" id="passwordError">{error}</span>
        </div>
    )
}

export default FieldPassword;