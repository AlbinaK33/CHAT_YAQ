import React from "react";
import "./index.scss";

interface LoadingButtonProps {
    isLoading: boolean;
    text: string;
    className?: string;
    type?: "button" | "submit" | "reset";
};


const LoadingButton: React.FC<LoadingButtonProps> = ({ isLoading, text, className, type = "button",}) => {
    return (
        <button className={`button ${className} ${isLoading ? "button--loading" : ""}`} 
        disabled={isLoading} type={type}>
            {isLoading ? (
                <span className="button__loading-dots">
                    <span className="button__dot"></span>
                    <span className="button__dot"></span>
                    <span className="button__dot"></span>
                </span>
            ) : (
                text
            )}
        </button>
    )
};

export default LoadingButton;