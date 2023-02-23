import { Roboto, Jost } from '@next/font/google';
import { services } from '@/data';
import styles from './services.module.scss';

const jost = Jost({
  subsets: ['latin'],
  weight: ['700']
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
});

const HeroServices = () => {
  return (
    <section className={`${styles.container} ${jost.className}`}>
      <ul className={styles.services}>
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <li key={idx} className={styles.service}>
              <div className={styles.icon}>
                <Icon />
              </div>
              <div className={styles.text}>
                <h3>{service.title}</h3>
                <span className={roboto.className}>{service.subtitle}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HeroServices;
