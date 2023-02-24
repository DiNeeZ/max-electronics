import { products } from '@/data';
import styles from './bestsellers.module.scss';
import ProductCard from '../product-card/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter((product) => product.meta.includes('bestseller'));

  return (
    <section className={styles.bestsellers}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {bestsellers.map((bestseller) => (
            <ProductCard key={bestseller.id} product={bestseller} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Bestsellers;
