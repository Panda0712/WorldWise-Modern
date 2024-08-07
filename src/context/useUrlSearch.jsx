import { useContext } from 'react';
import { SearchParamsContext } from './SearchParamsContext';

export function useUrlSearch() {
  const context = useContext(SearchParamsContext);
  if (!context)
    throw new Error(
      'SearchParamsContext was used outside of the SearchParamsProvider'
    );
  return context;
}
