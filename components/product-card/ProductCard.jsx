import Image from 'next/image';

import StarRating from '../star-rating/StarRating';
import styles from './product-card.module.scss';

const ProductCard = ({ product }) => {
  const price = product.discount ? product.price * (1 - product.discount / 100) : product.price;

  return (
    <article className={styles.product}>
      <Image
        placeholder='blur'
        blurDataURL={product.imgUrl}
        className={styles.image}
        src={product.imgUrl}
        width={600}
        height={600}
        alt={product.title}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.price}>
          <p className={styles.current}>${price.toFixed(2)}</p>
          {product.discount && <p className={styles.old}>{product.price.toFixed(2)}</p>}
        </div>
        <StarRating rating={product.rating} />
      </div>
    </article>
  );
};

export default ProductCard;
