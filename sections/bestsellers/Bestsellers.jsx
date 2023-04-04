import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/ProductCard';
import styles from './bestsellers.module.scss';

const Bestsellers = ({ products }) => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => product.meta.includes('bestseller'));
    setBestsellers(filteredProducts);
  }, [products]);

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
