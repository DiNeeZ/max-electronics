import { useState, useEffect } from 'react';
import Star from './Star';
import styles from './star-rating.module.scss';

const StarRating = ({ rating }) => {
  const [rated, setRated] = useState(0);
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
    setRated(rating.stars);
  }, [rating]);

  const changeRating = (newRating) => {
    setRated(newRating);
  };

  const changeHovered = (hoveredValue) => {
    setHovered(hoveredValue);
  };

  return (
    <div className={styles.container}>
      <span className={styles.stars} onMouseLeave={() => changeHovered(0)}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            filled={value <= rated}
            hovered={value <= hovered}
            onClick={() => changeRating(value)}
            onHover={() => changeHovered(value)}
          />
        ))}
      </span>
      <span className={styles.votes}>({rating.votes})</span>
    </div>
  );
};

export default StarRating;
