/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useCities } from './useCities';

const SearchParamsContext = createContext();

function SearchParamsProvider({ children }) {
  const { setIsLoading } = useCities();
  const [currentCity, setCurrentCity] = useState({});

  async function getCity(id) {
    if (currentCity.id === Number(id)) return;
    setIsLoading(true);
    try {
      const res = await fetch(`/api/cities/${id}`);
      if (!res.ok) throw new Error(`Error fetching city data`);

      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SearchParamsContext.Provider
      value={{
        currentCity,
        setCurrentCity,
        getCity,
      }}
    >
      {children}
    </SearchParamsContext.Provider>
  );
}

export { SearchParamsContext, SearchParamsProvider };
