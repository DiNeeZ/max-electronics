import { DiDatabase } from 'react-icons/di';
import { menu } from '@/data';
import MenuItem from './menuItem/MenuItem';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <DiDatabase className={styles.icon} />
        <h3>All Departments</h3>
      </header>
      <ul className={styles.list}>
        {menu.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
