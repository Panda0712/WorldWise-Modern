import { useCities } from '../context/useCities';
import styles from './CountriesList.module.css';
import Footer from './Footer';
import Message from './Message';
import Spinner from './Spinner';

function CountriesList() {
  const { cities, isLoading } = useCities();

  const countries = cities.reduce(
    (acc, cur) =>
      acc.filter(city => city.country === cur.country).length > 0
        ? acc
        : [...acc, cur],
    []
  );

  if (isLoading) return <Spinner />;

  if (!countries.length)
    return (
      <Message message="💋 There is no countries in the list yet. Let's add some!!!" />
    );

  return (
    <>
      <ul className={styles.countriesList}>
        {countries.map(country => (
          <li className={styles.countriesItem} key={country.cityName}>
            <p>{country.emoji}</p>
            <p>{country.country}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default CountriesList;
