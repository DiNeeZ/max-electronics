import Link from 'next/link';
import styles from './dropdown.module.scss';

const Dropdown = ({ submenus, dropdown, baseUrl }) => {
  return (
    <div className={`${styles.dropdown} ${dropdown ? styles.visible : styles.hidden}`}>
      <ul className={styles.list}>
        {submenus.map((menuItem, idx) => {
          return (
            <li key={`${menuItem}-${idx}`}>
              <Link className={styles.link} href={`${baseUrl}${menuItem.url}`}>
                {menuItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
