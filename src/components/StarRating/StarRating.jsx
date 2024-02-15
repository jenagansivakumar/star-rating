import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex);
  }

  return (
    <div className="star-rating">
      {Array.from({ length: noOfStars }).map((_, index) => {
        const currentIndex = index + 1;
        return (
          <FaStar
            key={currentIndex}
            onClick={() => handleClick(currentIndex)}
            onMouseEnter={() => handleMouseEnter(currentIndex)}
            onMouseLeave={() => handleMouseLeave(currentIndex)}
            size={40}
          />
        );
      })}
    </div>
  );
}
