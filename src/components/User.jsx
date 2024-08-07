import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import styles from './User.module.css';

function User() {
  const { avatar, name, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className={styles.user}>
      <img src={avatar} alt="" />
      <span>Welcome back, {name}</span>
      <button
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default User;
