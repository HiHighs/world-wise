import styles from './CountryItem.module.css';

import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

// To support flag emojis
polyfillCountryFlagEmojis();

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
