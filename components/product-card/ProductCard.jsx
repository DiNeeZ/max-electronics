import Image from 'next/image';
import { Rubik } from '@next/font/google';

import StarRating from '../star-rating/StarRating';
import styles from './product-card.module.scss';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['500']
});

const ProductCard = ({ product, sold }) => {
  const price = product.discount ? product.price * (1 - product.discount / 100) : product.price;

  console.log(product);

  return (
    <article className={styles.product}>
      <div className={styles.wrapper}>
        {product.discount && (
          <span className={`${styles.discountBage} ${rubik.className}`}>
            -${product.price * (product.discount / 100)}
          </span>
        )}
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
      </div>
      {sold && (
        <div className={styles.sold}>
          <span className={styles.soldBar}>
            <span
              style={{
                width: `${(product.availability.sold / product.availability.total) * 100}%`
              }}
              className={styles.progress}
            />
          </span>
          <span className={styles.soldItems}>
            Sold: {product.availability.sold} / {product.availability.total}
          </span>
        </div>
      )}
    </article>
  );
};

export default ProductCard;
