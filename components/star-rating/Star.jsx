import { FaStar } from 'react-icons/fa';
import styles from './star-rating.module.scss';

const Star = ({ filled, hovered, onClick, onHover }) => {
  return (
    <FaStar
      className={`${styles.star} ${filled && styles.filled} ${hovered && styles.hovered}`}
      onClick={onClick}
      onMouseEnter={onHover}
    />
  );
};

export default Star;
