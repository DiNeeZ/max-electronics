import { RiShipLine } from 'react-icons/ri';
import { MdSupportAgent } from 'react-icons/md';
import { ImCreditCard } from 'react-icons/im';
import { TbDiscount2 } from 'react-icons/tb';
import { services } from '@/data';
import styles from './services.module.scss';

const HeroServices = () => {
  return (
    <div className={styles.container}>
      <ul className='hero-services'>
        <li>
          <div></div>
          <div>
            <h3>{item.title}</h3>
            <span>{item.subtitle}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeroServices;
