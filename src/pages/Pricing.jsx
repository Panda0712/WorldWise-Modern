import styles from './Pricing.module.css';
import PageNav from '../components/PageNav';

function Pricing() {
  return (
    <div>
      <PageNav />
      <h2 className={styles.heading}>WE PROVIDE PRICING PLANS FOR YOU</h2>
      <div className={styles.pricing}>
        <div className={styles.pricingCard}>
          <div className={styles.pricingWrapper}>
            <h2>BASIC</h2>
            <span>PER MONTH</span>
          </div>
          <p>59$</p>
          <div className={styles.pricingOffer}>
            <h4>✅ Access to basic content</h4>
            <h4>✅ Standard definition streaming</h4>
            <h4>✅ 1 device at a time</h4>
            <h4>✅ Limited support</h4>
          </div>
          <button className={styles.cta}>Order Now</button>
        </div>
        <div className={styles.pricingCard}>
          <div className={styles.pricingWrapper}>
            <h2>STANDARD</h2>
            <span>PER MONTH</span>
          </div>
          <p>79$</p>
          <div className={styles.pricingOffer}>
            <h4>✅ Access to all content</h4>
            <h4>✅ High definition streaming</h4>
            <h4>✅ 2 devices at a time</h4>
            <h4>✅ Priority support</h4>
          </div>
          <button className={styles.cta}>Order Now</button>
        </div>
        <div className={styles.pricingCard}>
          <div className={styles.pricingWrapper}>
            <h2>PREMIUM</h2>
            <span>PER MONTH</span>
          </div>
          <p>99$</p>
          <div className={styles.pricingOffer}>
            <h4>✅ Access to all content</h4>
            <h4>✅ Ultra high definition streaming</h4>
            <h4>✅ 4 devices at a time</h4>
            <h4>✅ 24/7 premium support</h4>
            <h4>✅ Offline downloads</h4>
          </div>
          <button className={styles.cta}>Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
