import React from 'react'
import './index.scss'
interface likedButtonProps {
  liked: number;
  setLiked: (liked: number) => void;
}
const likedButton: React.FC<likedButtonProps> = ({liked, setLiked}) => {
  return (
    <button
          onClick={() => {
            setLiked(liked<0 ?Date.now() : -Date.now());
          }}
        >
          {liked<0? (
            <img className="heart-button" src="/img/heart transparent.png" alt="like button" />
          ) : (
            <img className="heart-button" src="/img/heart color.png" alt="like button" />
          )}
        </button>
  )
}

export default likedButton