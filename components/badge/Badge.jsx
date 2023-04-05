import styles from './badge.module.scss';

const Badge = ({ children, light }) => {
  return <span className={`${styles.badge} ${light && styles.light}`}>{children}</span>;
};

export default Badge;
