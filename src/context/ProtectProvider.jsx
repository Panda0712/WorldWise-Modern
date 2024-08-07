/* eslint-disable react/prop-types */
import { createContext, useEffect } from 'react';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

const ProtectContext = createContext();

function ProtectProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return <ProtectContext.Provider>{children}</ProtectContext.Provider>;
}

export { ProtectContext, ProtectProvider };
