import { useEffect, useState } from 'react';

import styles from './Login.module.css';
import PageNav from '../components/PageNav';
import Button from '../components/Button';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('bray@gmail.com');
  const [password, setPassword] = useState('admin');

  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/app');
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login to navigate to our main WorldWise Map</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">Username</label>
          <input
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <Button type="login">Login</Button>
      </form>
    </div>
  );
}

export default Login;
