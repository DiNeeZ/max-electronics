import styles from './sort-nav.module.scss';

const SortNav = ({ options, active, handleClick }) => {
  return (
    <ul className={styles.sort}>
      {options.map((item) => (
        <li
          key={`sort-nav-${item}`}
          className={`${styles.sortItem} ${active === item && styles.active}`}
          onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SortNav;
