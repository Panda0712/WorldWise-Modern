// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837
import styles from './Form.module.css';
import Button from './Button';
import Footer from './Footer';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { usePosition } from '../hook/usePosition';
import { useCities } from '../context/useCities';
import Message from './Message';

function Form() {
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [emoji, setEmoji] = useState('');
  const [date, setDate] = useState(new Date().toDateString());
  const [notes, setNotes] = useState('');

  const [lat, lng] = usePosition();
  const { handleAddCity, isLoading } = useCities();

  const [isLoadingPosition, setIsLoadingPosition] = useState(false);

  const navigate = useNavigate();

  function handleBack(e) {
    e.preventDefault();
    navigate(-1);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      date,
      emoji,
      notes,
      position: { lat, lng },
    };
    handleAddCity(newCity);
    navigate('/app');
  }

  useEffect(() => {
    async function fetchCityData() {
      setIsLoadingPosition(true);
      try {
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data = await res.json();
        setCityName(data.city || data.locality);
        setCountry(data.countryName);
        setEmoji(data.countryCode);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoadingPosition(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  if (isLoadingPosition) return <Spinner />;

  if (!cityName || !country)
    return (
      <Message message="👌 There is no city on your click location. Please choose again 😉" />
    );

  return (
    <>
      <form className={`${styles.form} ${isLoading ? styles.formLoading : ''}`}>
        <div className={styles.formGroup}>
          <label htmlFor="cityName">City Name</label>
          <input
            type="text"
            value={cityName}
            onChange={e => setCityName(e.target.value)}
            id="cityName"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">When did you go to {cityName}?</label>
          <DatePicker
            className={styles.datePicker}
            onChange={date => setDate(date)}
            selected={date}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Notes about your trip to {cityName}</label>
          <textarea
            name="date"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            id="date"
          ></textarea>
        </div>
        <div className={styles.button}>
          <Button type="primary" onClick={handleAdd}>
            ADD
          </Button>
          <Button type="back" onClick={handleBack}>
            &larr; Back
          </Button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Form;
