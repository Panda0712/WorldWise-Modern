/* eslint-disable react/prop-types */
import styles from './Message.module.css';

function Message({ message }) {
  return (
    <div className={styles.messageBox}>
      <span className={styles.message}>{message}</span>
    </div>
  );
}

export default Message;
