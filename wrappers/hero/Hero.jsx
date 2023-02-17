import Sidebar from '@/components/sidebar/Sidebar';
import { Jost } from '@next/font/google';
import styles from './hero.module.scss';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

const Hero = () => {
  return (
    <section className={`${styles.hero} ${jost.className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div style={{ width: '260px' }}>
            <Sidebar />
          </div>
          <div style={{ flex: '1 0 auto' }}>Slider</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
