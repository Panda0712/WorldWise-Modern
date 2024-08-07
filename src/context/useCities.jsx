import { useContext } from 'react';
import { CityContext } from './CityContext';

export function useCities() {
  const context = useContext(CityContext);
  if (!context)
    throw new Error('CityContext was used outside of the CityProvider');
  return context;
}
