import { useNavigate, useParams } from 'react-router-dom';
import { useUrlSearch } from '../context/useUrlSearch';
import { useEffect } from 'react';
import styles from './City.module.css';
import Button from './Button';
import { useCities } from '../context/useCities';
import Spinner from './Spinner';

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: 'long', // Full name of the day
    year: 'numeric', // Full year
    month: 'long', // Full name of the month
    day: 'numeric', // Day of the month
  };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}

function City() {
  const { id } = useParams();
  const { isLoading } = useCities();

  const navigate = useNavigate();

  const { currentCity, getCity } = useUrlSearch();

  useEffect(() => {
    getCity(id);
  }, [id]);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.cityItem}>
        <h2>CITY NAME</h2>
        <p>
          {currentCity.emoji} <strong>{currentCity.cityName}</strong>
        </p>
      </div>
      <div className={styles.cityItem}>
        <h2>YOU WENT TO {currentCity.cityName} ON</h2>
        <p>{formatDate(currentCity.date)}</p>
      </div>
      <div className={styles.cityItem}>
        <h2>YOUR NOTES</h2>
        <p>{currentCity.notes}</p>
      </div>
      <div className={styles.cityItem}>
        <h2>LEARN MORE</h2>
        <a
          href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
          target="_blank"
        >
          <p>Check out {currentCity.cityName} on Wikipedia &rarr;</p>
        </a>
      </div>
      <Button type="back" onClick={() => navigate(-1)}>
        &larr; Back
      </Button>
    </div>
  );
}

export default City;
