export default function getChats(dialogId) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8000/chat/${dialogId}`)
      .then(resp => {
        if (resp.ok) {
          resolve(resp.json());
        } else {
          reject(new Error("Network response was not ok"));
        }
      })
      .catch(error => reject(error));
  })
}