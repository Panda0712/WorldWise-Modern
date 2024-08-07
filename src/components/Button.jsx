/* eslint-disable react/prop-types */
import styles from './Button.module.css';
function Button({ type, onClick, children }) {
  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
