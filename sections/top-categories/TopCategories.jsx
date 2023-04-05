import { topCategories } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import styles from './top-categories.module.scss';

const TopCategories = () => {
  return (
    <section className={styles.topCategories}>
      <div className={styles.container}>
        <h2 className={styles.title}>Top Product Categories</h2>
        <ul className={styles.list}>
          {topCategories.map((category) => (
            <li key={category.id}>
              <Link href='/' className={styles.category}>
                <Image
                  className={styles.image}
                  src={category.image}
                  width={200}
                  height={170}
                  alt={category.title}
                />
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopCategories;
