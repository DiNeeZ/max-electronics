import { useEffect, useRef, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { BaseBanner, Sidebanner } from '@/components/banners';
import SortNav from '@/components/sort-nav/SortNav';
import { sortSmartphones } from '@/data';
import styles from './smartphones.module.scss';
import ProductCard from '@/components/product-card/ProductCard';

const Smartphones = ({ products }) => {
  const [sortOption, setSortOption] = useState(sortSmartphones[0]);
  const [animationParent] = useAutoAnimate();

  return (
    <section className={styles.smartphones}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Sidebanner />
          <div className={styles.products}>
            <div className={styles.heading}>
              <h2 className={styles.title}>Smartphones & Accessories</h2>
              <SortNav
                options={sortSmartphones}
                active={sortOption}
                handleClick={(value) => setSortOption(value)}
              />
            </div>
            <ul ref={animationParent} className={styles.list}>
              {products
                .sort((a, b) => {
                  if (sortOption === 'Featured') return b.rating.votes - a.rating.votes;
                  if (sortOption === 'On Sale') return b.discount - a.discount;
                  if (sortOption === 'Top Rated') return b.rating.stars - a.rating.stars;
                })
                .slice(0, 8)
                .map((product) => (
                  <ProductCard key={`smartphones-${product.id}`} product={product} />
                ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <BaseBanner />
        </div>
      </div>
    </section>
  );
};

export default Smartphones;
