import { Roboto } from '@next/font/google';

import CountdownModule from 'react-countdown';
import styles from './countdown.module.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
});

const Completionist = () => <span>You&aposre to late</span>;

const Countdown = ({ hoursLeft, variant }) => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className={styles.container}>
          <span className={`${styles.unit} ${variant === 'small' && styles.small}`}>
            <span className={styles.num}>{hours}</span>
            <span className={`${styles.text} ${roboto.className}`}>hours</span>
          </span>
          <span className={`${styles.unit} ${variant === 'small' && styles.small}`}>
            <span className={styles.num}>{minutes}</span>
            <span className={`${styles.text} ${roboto.className}`}>mins</span>
          </span>
          <span className={`${styles.unit} ${variant === 'small' && styles.small}`}>
            <span className={styles.num}>{seconds}</span>
            <span className={`${styles.text} ${roboto.className}`}>secs</span>
          </span>
        </div>
      );
    }
  };
  return <CountdownModule date={Date.now() + hoursLeft * 3600000} renderer={renderer} />;
};

export default Countdown;
