import styles from './Homepage.module.css';
import PageNav from '../components/PageNav';
import HomepageList from '../components/HomepageList';

function Homepage() {
  return (
    <div>
      <PageNav />
      <div className={styles.homepage}>
        <h2>Welcome to our WorldWise</h2>
        <p>
          This is our WorldWise modern website. Here you can find details about
          Ultraman Generations and discover your location, where you have gone
          and provide that information to us.
        </p>
      </div>
      <HomepageList />
    </div>
  );
}

export default Homepage;
