import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error('AuthContext was used outside of the AuthProvider');
  return context;
}
