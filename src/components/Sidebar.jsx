import { NavLink, Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <AppNav />
      <ul className={styles.sidebarList}>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Sidebar;
