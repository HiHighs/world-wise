import styles from './CityList.module.css';
import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';
import CityItem from './CityItem.jsx';

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (cities.length === 0)
    return (
      <Message message='Add your first city by clicking on a city on the map!' />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
