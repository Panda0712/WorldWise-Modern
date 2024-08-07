/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

const CityContext = createContext();

function CityProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddCity(cityData) {
    setIsLoading(true);
    try {
      const res = await fetch('/api/cities', {
        method: 'POST',
        body: JSON.stringify(cityData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setCities(cities =>
        cities.filter(x => x.cityName === cityData.cityName).length > 0
          ? cities
          : [...cities, { ...cityData, id: data.id }]
      );
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteCity(id) {
    setIsLoading(true);
    try {
      await fetch(`/api/cities/${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
    setCities(cities => cities.filter(x => x.id !== Number(id)));
  }

  useEffect(() => {
    setIsLoading(true);
    async function fetchCities() {
      try {
        const res = await fetch('/api/cities');
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CityContext.Provider
      value={{
        cities,
        isLoading,
        setIsLoading,
        handleAddCity,
        handleDeleteCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export { CityContext, CityProvider };
