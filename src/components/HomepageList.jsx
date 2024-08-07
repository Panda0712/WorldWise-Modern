import { Link } from 'react-router-dom';
import styles from './HomepageList.module.css';

function HomepageList() {
  return (
    <ul className={styles.homepageContent}>
      <li className={styles.homepageCard}>
        <img
          src="https://preview.redd.it/new-ultraman-arc-poster-v0-xny9rjogcjsc1.jpeg?auto=webp&s=a6116dbfb3fa92c391f9bf91dc3991fc2f8b41f5"
          alt=""
        />
        <div className={styles.homepageWrapper}>
          <p>Ultraman Arc</p>
          <span>
            “Unleash your imagination!” When the mystic light emerging from
            Yuma’s hand embodies his entire body, his power of imagination fuses
            him with the light and he transforms into Ultraman Arc, the Giant of
            Light who protects the future! Alongside his precious friends, Yuma,
            as well as Ultraman Arc, gallops towards his everlasting dream!
          </span>
        </div>
        <div>
          <Link to="/details">
            <button className={styles.cta}>Learn more</button>
          </Link>
        </div>
      </li>
      <li className={styles.homepageCard}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BYTI1MmJhMmQtMzk2Yy00ODQzLTg2YWMtZTI1Zjk3MmFmNWFmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
          alt=""
        />
        <div className={styles.homepageWrapper}>
          <p>Ultraman Blazar</p>
          <span>
            Captain Gento, shrouded by Ultraman Blazar’s light, with the unique
            members of the newly organized SKaRD, throws themselves into battles
            against the kaiju with dauntless courage and an unwavering sense of
            justice!
          </span>
        </div>
        <div>
          <Link to="/details">
            <button className={styles.cta}>Learn more</button>
          </Link>
        </div>
      </li>
      <li className={styles.homepageCard}>
        <img
          src="https://lh5.googleusercontent.com/proxy/mfli7wrgY9bES5QdycnLhon49H9dN3B4xkTDUKRYxiRF1w4kBI-MKq3Te2kAofKDoiEu5jOh4jt-lNeN6CoenRGUq-OUkXJfAJhYMg"
          alt=""
        />
        <div className={styles.homepageWrapper}>
          <p>Ultraman Rising</p>
          <span>
            Baseball superstar Ken Sato returns to his home country of Japan to
            pick up the mantle of Earth-defending superhero Ultraman, but
            quickly finds more than he bargained for when heʼs forced to raise
            the offspring of his greatest foe, a newborn Kaiju. Struggling to
            balance the roles of teammate and new father, Ken must confront his
            own ego, his estranged father, and the conniving Kaiju Defense Force
            to rise up and discover what it truly means to be Ultraman.
          </span>
        </div>
        <div>
          <Link to="/details">
            <button className={styles.cta}>Learn more</button>
          </Link>
        </div>
      </li>
      <li className={styles.homepageCard}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNTIyNDAzMGQtYmQ0YS00OWE2LWJjZjgtY2M3NmU4YmYxMDQ5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
          alt=""
        />
        <div className={styles.homepageWrapper}>
          <p>Shin Ultraman</p>
          <span>
            The continued appearance of giant unidentified life forms known as
            “S-Class Species (Kaiju)” has become commonplace in Japan.
            Conventional weapons have no effect on them. Having exhausted all
            other options, the Japanese Government issued the S-Class Species
            Suppression Protocol and formed an enforcement unit, known as the
            SSSP.
          </span>
        </div>
        <div>
          <Link to="/details">
            <button className={styles.cta}>Learn more</button>
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default HomepageList;
