import { motion } from 'framer-motion';

import { wheel } from '@/data';
import Image from 'next/image';
import { useState } from 'react';
import styles from './wheel-gallery.module.scss';

const WheelGallery = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.container}>
      <ul className={styles.navigation}>
        {wheel.map((_, idx) => {
          return (
            <li
              className={`${styles.button} ${current === idx && styles.active}`}
              key={`nav-${idx}`}
              onClick={() => setCurrent(idx)}
            />
          );
        })}
      </ul>
      <motion.div
        className={styles.imageWrapper}
        key={wheel[current]}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          x: {
            type: 'spring',
            damping: 8,
            stiffness: 150,
            restDelta: 0.01
          }
        }}>
        <Image className={styles.image} height={400} width={400} alt='wheel' src={wheel[current]} />
      </motion.div>
    </div>
  );
};

export default WheelGallery;
