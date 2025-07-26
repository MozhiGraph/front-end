import GroupsAndDMs from "./components/groups-and-dms/main";
import Chat from "./components/chat/main";
import styles from "./app.module.css";
import { useState } from "react";

export default function App() {
  const [currentDialog, setCurrentDialog] = useState(777000);
  return (
    <div className={styles.app}>
      <GroupsAndDMs currentDialog={currentDialog} setCurrentDialog={setCurrentDialog} />
      <Chat currentDialog={currentDialog} />
    </div>
  );
}
