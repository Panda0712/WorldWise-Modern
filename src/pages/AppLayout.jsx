import styles from './AppLayout.module.css';

import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import User from '../components/User';

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;