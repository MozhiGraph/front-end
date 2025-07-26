import styles from './message-input.module.css';

export default function MessageInput() {
  return (
    <div className={styles.main}>
      <textarea type="text" />
      <button>Send</button>
    </div>
  );
}
