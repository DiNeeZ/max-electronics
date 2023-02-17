import { AiOutlineSearch } from 'react-icons/ai';
import { Roboto } from '@next/font/google';
import styles from './searchbar.module.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
});

const Searchbar = () => {
  return (
    <form className={`${styles.search} ${roboto.className}`}>
      <div className={styles.control}>
        <input type='text' placeholder='Search for products' />
        <select name='select'>
          <option value='value1' selected>
            All Categories
          </option>
          <option value='value2'>Phones</option>
          <option value='value3'>Laptops</option>
        </select>
      </div>
      <button type='submit' aria-label='search'>
        <AiOutlineSearch size={25} />
      </button>
    </form>
  );
};

export default Searchbar;
