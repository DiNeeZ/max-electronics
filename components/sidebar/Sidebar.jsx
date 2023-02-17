import Link from 'next/link';
import { DiDatabase } from 'react-icons/di';
import { FiChevronRight } from 'react-icons/fi';
import styles from './sidebar.module.scss';

const data = [
  {
    id: '1C1XQoWhrk',
    name: 'Value of the Day'
  },
  {
    id: 'Sho2tnr-B5',
    name: 'Top 100 Offers'
  },
  {
    id: '5oY7qqg8h1',
    name: 'New Arrivals',
    submenu: ['Submenu']
  },
  {
    id: '2q5FyJLJeq',
    name: 'Laptops & Computers',
    submenu: ['Submenu']
  },
  {
    id: 'PC8hnmvo29',
    name: 'Cameras & Photography',
    submenu: ['Submenu']
  },
  {
    id: 'TV0JozbDW7',
    name: 'Smart Phones & Tablets',
    submenu: ['Submenu']
  },
  {
    id: 'F8wO2CV7Sa',
    name: 'Video Games & Consoles',
    submenu: ['Submenu']
  },
  {
    id: 'aLSiFfFRbf',
    name: 'TV & Audio',
    submenu: ['Submenu']
  },
  {
    id: 'nAte0AkIeH',
    name: 'Gadgets',
    submenu: ['Submenu']
  },
  {
    id: '-li8h-AUNX',
    name: 'Car Electronic & GPS',
    submenu: ['Submenu']
  },
  {
    id: '4cjH7Q89Ft',
    name: 'Accesories',
    submenu: ['Submenu']
  }
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <DiDatabase className={styles.icon} />
        <h3>All Departments</h3>
      </header>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id}>
            <Link className={styles.link} href='/'>
              <span>{item.name}</span>
              {item.submenu && <FiChevronRight />}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
