import { Link } from 'react-router-dom';
import { useCities } from '../context/useCities';
import styles from './CitiesList.module.css';
import { useUrlSearch } from '../context/useUrlSearch';
import Spinner from './Spinner';
import Footer from './Footer';
import Message from './Message';
import { memo } from 'react';

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const CitiesList = memo(function CitiesList() {
  const { cities, isLoading, handleDeleteCity } = useCities();
  const { currentCity, setCurrentCity } = useUrlSearch();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="👻 There is no city in the list yet. Let's add some!!!" />
    );

  return (
    <>
      <ul className={styles.citiesList}>
        {cities.map(city => (
          <li key={city.cityName}>
            <Link
              to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
              className={`${styles.citiesItem} ${
                currentCity.cityName === city.cityName
                  ? styles.citiesItemActive
                  : ''
              }`}
            >
              <div>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </div>
              <div>
                <span>({formatDate(city.date)})</span>
                <button
                  className={styles.deleteBtn}
                  onClick={e => {
                    e.preventDefault();
                    handleDeleteCity(city.id);
                    setCurrentCity({});
                  }}
                >
                  x
                </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
});

export default CitiesList;
