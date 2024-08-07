/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const AuthContext = createContext();

const FAKE_USER = {
  name: 'Bray',
  email: 'bray@gmail.com',
  password: 'admin',
  avatar: 'https://i1.sndcdn.com/artworks-000205012975-6r020n-t500x500.jpg',
};

function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [name] = useState(FAKE_USER.name);
  const [username] = useState(FAKE_USER.email);
  const [password] = useState(FAKE_USER.password);
  const [avatar] = useState(FAKE_USER.avatar);

  function login(userEmail, userPassword) {
    if (userEmail !== username || userPassword !== password) return;
    setAuthenticated(true);
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        name,
        password,
        avatar,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
