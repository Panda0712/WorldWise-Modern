import { Link } from 'react-router-dom';
import styles from './AppNav.module.css';

function AppNav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src="https://i.pinimg.com/originals/08/87/9e/08879e51eaf2350d6701672a2ec8b5eb.png" />
      </Link>
      <span>WorldWise</span>
    </nav>
  );
}

export default AppNav;
