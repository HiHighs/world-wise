import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

// To support flag emojis
polyfillCountryFlagEmojis();

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
  const {
    id,
    cityName,
    emoji,
    date,
    position: { lat, lng },
  } = city;

  return (
    <li>
      <Link to={`${id}?lat=${lat}&lng=${lng}`} className={styles.cityItem}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
