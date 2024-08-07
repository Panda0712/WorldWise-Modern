import { Link, NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

function PageNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Link to="/">
          <img src="https://i.pinimg.com/originals/08/87/9e/08879e51eaf2350d6701672a2ec8b5eb.png" />
        </Link>
        <span>WorldWise</span>
      </div>
      <ul>
        <li className={styles.navLink}>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="/app">App</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li className={styles.navLink}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
