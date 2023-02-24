import Image from 'next/image';
import styles from './product-card.module.scss';

const ProductCard = ({ product }) => {
  return (
    <article className={styles.product}>
      <Image
        className={styles.image}
        src={product.imgUrl}
        width={600}
        height={600}
        alt={product.title}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>sadsadsadasdas</p>
        <div className={styles.rating}></div>
      </div>
    </article>
  );
};

export default ProductCard;
