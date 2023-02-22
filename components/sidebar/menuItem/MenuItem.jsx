import Link from 'next/link';
import { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import Dropdown from '../dropdown/Dropdown';
import styles from './menu-item.module.scss';

const MenuItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
      {item.submenu ? (
        <>
          <Link
            href={`${item.url}`}
            onClick={() => setDropdown((prev) => !prev)}
            className={styles.link}
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}>
            <span>{item.name}</span>
            <GoChevronRight className={styles.chevron} />
          </Link>
          <Dropdown baseUrl={item.url} submenus={item.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link className={styles.link} href={item.url}>
          {item.name}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
