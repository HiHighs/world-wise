import Spinner from '../Spinner/Spinner.jsx';
import CountryItem from './CountryItem.jsx';
import styles from './CountryList.module.css';

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((acc, city) => {
    if (!acc.some((item) => item.country === city.country)) {
      acc.push({
        id: city.id,
        country: city.country,
        emoji: city.emoji,
      });
    }
    return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
