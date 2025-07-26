import styles from './main.module.css';
import MsgInput from './message-input.jsx';
import Messages from './msgs.jsx';

export default function ChatMain() {
  return (
    <div className={styles.main}>
      <Messages />
      <MsgInput />
    </div>
  );
}