import Sidebar from '@/components/sidebar/Sidebar';
import HeroSlider from '@/components/hero-slider/HeroSlider';
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
          <Sidebar />
          <HeroSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
