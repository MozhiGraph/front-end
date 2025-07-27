import styles from './message-input.module.css';
import postMessage from '../../backend-interactions/tg/post-msg';
import translate from '../../backend-interactions/translate';

export default function MessageInput({currentDialog}) {
  return (
    <div className={styles.main}>
      <button id='translate-button-input' onClick={() => {
        const translateButton = document.getElementById('translate-button-input');
        const textarea = document.querySelector('textarea');
        const message = textarea.value;
        translateButton.disabled = true;
        translate(message, 'hindi')
          .then(translatedText => {
            textarea.value = translatedText;
            translateButton.disabled = false;
          })
          .catch(error => {
            translateButton.innerText = "Try Again";
            console.error("Translation error:", error);
            translateButton.disabled = false;
          });
      }}>Translate</button>
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
