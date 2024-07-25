import React, { useRef, useState, useEffect } from "react";

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

function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null;
    return function(this: any, ...args: Parameters<T>) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
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

      const inputRef = useRef<HTMLInputElement>(null);
      const cursorRef = useRef<HTMLDivElement>(null);
      const measureRef = useRef<HTMLSpanElement>(null);

      const [isFocused, setIsFocused] = useState(false);
      const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {

        const input = inputRef.current;
        const cursor = cursorRef.current;
        const measure = measureRef.current;

        const cursorPosition = debounce(() => {
            if(input && cursor && measure) {
                const text = input.value.substring(0, input.selectionStart ?? 0);
                measure.textContent = showPassword ? text : "*".repeat(text.length);
                const leftPos = measure.offsetWidth;
                cursor.style.left = `${leftPos + 4}px`;
            }
        }, 50)

    if(input && cursor) {

        const handleKeyDown = (e: KeyboardEvent) => {
            cursor.style.display = "inline-block";
        }

        const handleKeyUp = (e: KeyboardEvent) => {
            cursorPosition(); 
        }

        const handleCursorFocus = () => {
            setIsFocused(true);
            cursor.style.display = "inline-block";
          };
    
          const handleCursorBlur = () => {
            setIsFocused(false);
            cursor.style.display = "none"; 
          };

          input.addEventListener("keydown", handleKeyDown);
          input.addEventListener("keyup", handleKeyUp);
          input.addEventListener("focus", handleCursorFocus);
          input.addEventListener("blur", handleCursorBlur);

        return () => {
            input.removeEventListener("keydown", handleKeyDown);
            input.removeEventListener("keyup", handleKeyUp);
            input.removeEventListener("focus", handleCursorFocus);
            input.removeEventListener("blur", handleCursorBlur);
    };
}
    }, [])
   

    

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
                    <div className={`password-wrapper ${showPassword ? "show-password" : ""}`}>

                        <input
                        className={inputClassName} 
                        name="password" 
                        value={value} 
                        type={showPassword ? "text" : "password"} placeholder={placeholder} 
                        onChange={onChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        data-show-password={showPassword}
                        ref={inputRef}
                        />
                        <span className={`field__icon hide ${showPassword ? "show" : ""} `}
                        onClick={onTogglePassword}>
                        </span>
                        <div className="cursor" ref={cursorRef}></div>
                        <span className="text-measure" ref={measureRef}></span>
                    </div>
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