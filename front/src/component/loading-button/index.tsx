import React from "react";
import "./index.scss";

interface LoadingButtonProps {
    isLoading: boolean;
    onClick: () => void;
    text: string;
    className: string;
};


const LoadingButton: React.FC<LoadingButtonProps> = ({ isLoading, onClick, text, className}) => {
    return (
        <button className={`button ${className} ${isLoading ? "button--loading" : ""}`} onClick={onClick} disabled={isLoading}>
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