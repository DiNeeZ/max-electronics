import styles from './product-card.module.scss';

const ProductCard = ({ product }) => {
  return (
    <article className={styles.product}>
      <h3>{product.title}</h3>
    </article>
  );
};

export default ProductCard;
