import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Roboto } from '@next/font/google';
import styles from './searchbar.module.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400']
});

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  return (
    <form className={`${styles.search} ${roboto.className}`}>
      <div className={styles.control}>
        <input
          value={searchQuery}
          onChange={handleSearchQueryChange}
          type='text'
          placeholder='Search for products'
        />
        <select name='select category'>
          <option value='all'>All Categories</option>
          <option value='phones'>Phones</option>
          <option value='laptops'>Laptops</option>
        </select>
      </div>
      <button type='submit' aria-label='search'>
        <AiOutlineSearch size={25} />
      </button>
    </form>
  );
};

export default Searchbar;
