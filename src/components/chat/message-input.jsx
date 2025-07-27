import styles from './message-input.module.css';
import postMessage from '../../backend-interactions/tg/post-msg';

export default function MessageInput({currentDialog}) {
  return (
    <div className={styles.main}>
      <textarea type="text" />
      <button onClick={() => {
        const message = document.querySelector('textarea').value;
        postMessage(message, currentDialog)
        .then(response => {
          console.log("Message sent successfully:", response);
          document.querySelector('textarea').value = '';
        })
        .catch(error => {
          console.error("Error sending message:", error);
        })
      }}>Send</button>
    </div>
  );
}
