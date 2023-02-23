import ProductCard from '../product-card/ProductCard';
import { products } from '@/data';
import styles from './bestsellers.module.scss';

const Bestsellers = () => {
  const bestsellers = products.filter((product) => product.meta.includes('bestseller'));

  return (
    <section className={styles.bestsellers}>
      <div className={styles.container}>
        <ul>
          {bestsellers.map((bestseller) => {
            return <li key={bestseller.id}>{bestseller.title}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Bestsellers;
