import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <h4>Copyright © {new Date().getFullYear()} by WorldWise Modern</h4>
    </div>
  );
}

export default Footer;
