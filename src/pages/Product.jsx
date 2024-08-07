import PageNav from '../components/PageNav';
import styles from './Product.module.css';

const episodes = [
  {
    title: 'ULTRAMAN BLAZAR Episode 1: The Blazar Awakens',
    description:
      'Gento Hiruma discovers his connection to Ultraman Blazar as the first kaiju threat emerges.',
  },
  {
    title: "ULTRAMAN BLAZAR Episode 2: SKaRD's First Mission",
    description:
      'SKaRD is deployed on their first mission to defend against a powerful kaiju attack.',
  },
  {
    title: "ULTRAMAN BLAZAR Episode 3: Kaiju Crisis: Gento's Test",
    description:
      'Gento faces a personal test as a new, more dangerous kaiju threatens the city.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 4: Alliance of Guardians',
    description:
      'Gento and Ultraman Blazar form a crucial alliance with other guardians to protect Earth.',
  },
  {
    title: "ULTRAMAN BLAZAR Episode 5: Blazar's Fiery Power",
    description:
      'Ultraman Blazar unveils a new fiery power to combat an infernal kaiju.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 6: The Hidden Enemy',
    description:
      'SKaRD uncovers a hidden enemy orchestrating the kaiju attacks from the shadows.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 7: Operation: Earth Defense',
    description:
      "A large-scale operation is launched to fortify Earth's defenses against kaiju.",
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 8: The Rise of Garamon',
    description:
      'A formidable kaiju named Garamon rises, posing a new challenge for Blazar and SKaRD.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 9: Mystery of the M421',
    description:
      'The team investigates the mysterious origins of Ultraman Blazar from the M421 blazar.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 10: Blazar vs. Alien Menace',
    description:
      'Blazar confronts an alien menace that threatens to conquer Earth.',
  },
  {
    title: "ULTRAMAN BLAZAR Episode 11: Guardian's Honor",
    description:
      "Gento learns the true meaning of a guardian's honor while battling a relentless kaiju.",
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 12: The Tilsonite Sword',
    description:
      'Ultraman Blazar gains the powerful Tilsonite Sword to defeat a new enemy.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 13: Kaiju Under Siege',
    description:
      "A coordinated kaiju attack puts the city under siege, testing SKaRD's limits.",
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 14: A New Ally',
    description:
      'A new ally joins SKaRD, bringing unique abilities to the fight against kaiju.',
  },
  {
    title: "ULTRAMAN BLAZAR Episode 15: Firdran's Fury",
    description:
      "Blazar taps into the power of Firdran's Fury to confront an enraged kaiju.",
  },
  {
    title: "ULTRAMAN BLAZAR Episode 16: Blazar's Secret Revealed",
    description:
      "The secret behind Blazar's origins and powers is revealed to Gento and the team.",
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 17: Kaiju Stone Hunt',
    description:
      'The team embarks on a quest to find the powerful Kaiju Stones scattered across Earth.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 18: Rainbow Slash Showdown',
    description:
      'Blazar uses the Rainbow Slash in an epic showdown against a formidable foe.',
  },
  {
    title: "ULTRAMAN BLAZAR Episode 19: SKaRD's Sacrifice",
    description:
      'SKaRD makes a significant sacrifice to save the city from a devastating kaiju attack.',
  },
  {
    title: "ULTRAMAN BLAZAR Episode 20: Blazar's Dark Hour",
    description:
      'Blazar faces his darkest hour as a powerful new enemy emerges.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 21: Rebirth of the Blazar',
    description:
      'Blazar undergoes a rebirth, gaining new powers to combat the escalating threats.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 22: Final Assault',
    description:
      'SKaRD and Blazar prepare for a final assault on the kaiju stronghold.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 23: The Ultimate Challenge',
    description:
      'Blazar faces the ultimate challenge against the most powerful kaiju yet.',
  },
  {
    title: 'ULTRAMAN BLAZAR Episode 24: Guardians Unite',
    description:
      'All the guardians unite for a climactic battle to save Earth from total destruction.',
  },
  {
    title: "ULTRAMAN BLAZAR Episode 25: Blazar's Last Stand",
    description:
      'In a final stand, Blazar and SKaRD fight to protect Earth from an apocalyptic threat.',
  },
];

const imageArray = [
  {
    img: 'https://universe-files.dacast.com/f4475cf7-081f-4af1-0d39-cf90cc0c6540.jpeg',
  },
  {
    img: 'https://universe-files.dacast.com/d18112a2-42a0-90e8-c0d7-b7943e24624f.jpeg',
  },
  {
    img: 'https://universe-files.dacast.com/4dedb98e-64c0-e4f2-1842-6c9fb68dbb8f.jpeg',
  },
  { img: 'https://i.ytimg.com/vi/njCZgrsW0hw/maxresdefault.jpg' },
  {
    img: 'https://static.wikia.nocookie.net/479c679f-f4e7-4e24-8f6a-8205f287a6c0/scale-to-width/755',
  },
  { img: 'https://i.ytimg.com/vi/BYTL_vZgDoY/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/NfxFCc2u4mI/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/iYCcjGaKf-w/maxresdefault.jpg' },
  {
    img: 'https://i.ytimg.com/vi/SCdxb1PAX2w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAz5sMpjDHEAHQ4pESMVekbnmiWMg',
  },
  { img: 'https://i.ytimg.com/vi/3nllfLfbf9E/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/YCJFb213ZMo/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/2QrSySpeWXo/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/2v2RWLa8fR0/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/3GP0MZ7cbjM/maxresdefault.jpg' },
  {
    img: 'https://i.ytimg.com/vi/Au2sAnfiCpo/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFMgXShlMA8=&rs=AOn4CLBGT86tbtQn7xZKq-CNhFlk3-VM2A',
  },
  { img: 'https://i.ytimg.com/vi/oHAuRSK_zv4/sddefault.jpg?v=653c6951' },
  { img: 'https://i.ytimg.com/vi/66fxTxpQYFU/maxresdefault.jpg' },
  {
    img: 'https://i.ytimg.com/vi/HMq5H2j9Fgc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5xhIjqGgAgkUVQovDL0l_jzW4cw',
  },
  { img: 'https://i.ytimg.com/vi/u72IAQviNs0/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/kDT1uxQHg0U/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/2jsM8UvY_L8/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/MLOR1hRfwBk/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/550SPZNgOiI/maxresdefault.jpg' },
  { img: 'https://i.ytimg.com/vi/8JLcMRCH7Ps/maxresdefault.jpg' },
  {
    img: 'https://i.ytimg.com/vi/54lHmPiQEhI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIG5OfMmdodCS6MXDCzuvN5f4AxA',
  },
];

function Product() {
  return (
    <div>
      <PageNav />
      <h2 className={styles.heading}>
        WATCH ULTRAMAN ON ULTRAMAN OFFICIAL YOUTUBE CHANNEL
      </h2>
      <div className={styles.productContent}>
        <div className={styles.productItem}>
          <img
            src="https://www.ultramanconnection.com/wp-content/themes/uc-wp-theme/img/arc/mv_pc.webp"
            alt=""
          />
          <ul className={styles.productCardContent}>
            <li className={styles.productCard}>
              <img
                src="https://www.ultramanconnection.com/wp-content/uploads/2024/08/ALT45.jpg"
                alt=""
              />
              <div className={styles.productWrapper}>
                <p>ULTRAMAN ARC Episode 05 "Ocean on the Mountain Ridge"</p>
                <span>
                  A favorite of kids far and wide, the Dinosaur Professor,
                  Shinya Makino has arrived in Hoshimoto City. And it seems he
                  wants to investigate the fossil discovered at the mountain
                  ridge. While Yuma is excited to see his childhood hero in
                  action, Hiroshi seems troubled. As it turns out, the Professor
                  was Hiroshi's teacher! Among all this, a lake suddenly appears
                  at the excavation site...
                </span>
              </div>
              <div>
                <button className={styles.cta}>Watch now</button>
              </div>
            </li>
            <li className={styles.productCard}>
              <img
                src="https://www.ultramanconnection.com/wp-content/uploads/2024/07/ALT44.jpg"
                alt=""
              />
              <div className={styles.productWrapper}>
                <p>ULTRAMAN ARC Episode 04 "On the Kaiju's Tail"</p>
                <span>
                  Captain Gento, shrouded by Ultraman Blazar’s light, with the
                  unique members of the newly organized SKaRD, throws themselves
                  into battles against the kaiju with dauntless courage and an
                  unwavering sense of justice!
                </span>
              </div>
              <div>
                <button className={styles.cta}>Watch now</button>
              </div>
            </li>
            <li className={styles.productCard}>
              <img
                src="https://www.ultramanconnection.com/wp-content/uploads/2024/07/ALT43.jpg"
                alt=""
              />
              <div className={styles.productWrapper}>
                <p>ULTRAMAN ARC Episode 03 "Unleash Your Imagination!"</p>
                <span>
                  Captain Gento, shrouded by Ultraman Blazar’s light, with the
                  unique members of the newly organized SKaRD, throws themselves
                  into battles against the kaiju with dauntless courage and an
                  unwavering sense of justice!
                </span>
              </div>
              <div>
                <button className={styles.cta}>Watch now</button>
              </div>
            </li>
            <li className={styles.productCard}>
              <img
                src="https://www.ultramanconnection.com/wp-content/uploads/2024/07/ALT42.jpg"
                alt=""
              />
              <div className={styles.productWrapper}>
                <p>ULTRAMAN ARC Episode 02 "Legend in the Woods"</p>
                <span>
                  Captain Gento, shrouded by Ultraman Blazar’s light, with the
                  unique members of the newly organized SKaRD, throws themselves
                  into battles against the kaiju with dauntless courage and an
                  unwavering sense of justice!
                </span>
              </div>
              <div>
                <button className={styles.cta}>Watch now</button>
              </div>
            </li>
            <li className={styles.productCard}>
              <img
                src="https://www.ultramanconnection.com/wp-content/uploads/2024/07/arc1.jpg"
                alt=""
              />
              <div className={styles.productWrapper}>
                <p>ULTRAMAN ARC Episode 02 "Legend in the Woods"</p>
                <span>
                  Captain Gento, shrouded by Ultraman Blazar’s light, with the
                  unique members of the newly organized SKaRD, throws themselves
                  into battles against the kaiju with dauntless courage and an
                  unwavering sense of justice!
                </span>
              </div>
              <div>
                <button className={styles.cta}>Watch now</button>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.productItem}>
          <img
            src="https://www.ultramanconnection.com/wp-content/themes/uc-wp-theme/page-assets/img/UC_UltramanBlazarPage_HeroBanner_bg_3600x1625_v-02.jpg"
            alt=""
          />
          <EpisodesList />
        </div>
      </div>
    </div>
  );
}

function EpisodesList() {
  return (
    <ul className={styles.productCardContent}>
      {episodes.map((ep, index) => (
        <li key={ep.title} className={styles.productCard}>
          <img src={imageArray[index].img} alt="" />
          <div className={styles.productWrapper}>
            <p>{ep.title}</p>
            <span>{ep.description}</span>
          </div>
          <div>
            <button className={styles.cta}>Watch now</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Product;
