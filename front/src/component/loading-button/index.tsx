import React from "react";
import "./index.scss";

interface LoadingButtonProps {
    isLoading: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
    className?: string;
    type?: "button" | "submit" | "reset";
};


const LoadingButton: React.FC<LoadingButtonProps> = ({ isLoading, onClick, text, className, type = "button",}) => {
    return (
        <button className={`button ${className} ${isLoading ? "button--loading" : ""}`} onClick={onClick} disabled={isLoading} type={type}>
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