import Individual from "./individual";
import styles from "./main.module.css";
import { useState, useEffect } from "react";
import getDialogs from "../../backend-interactions/tg/get-dialogs";

export default function GroupsAndDMs() {
  const [dialogs, setDialogs] = useState([]);

  useEffect(() => {
    getDialogs()
      .then(data => setDialogs(data))
      .catch(error => console.error("Error fetching dialogs:", error));
  }, []);

  return (
    <div className={styles.main}>
      {dialogs.map(dialog => (
        <Individual key={dialog.id} name={dialog.name} image={`http://localhost:8000/logos/${dialog.id}.jpg`} />
      ))}
    </div>
  );
}
