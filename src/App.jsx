import GroupsAndDMs from "./components/groups-and-dms/main";
import Chat from "./components/chat/main";
import styles from "./app.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <GroupsAndDMs />
      <Chat />
    </div>
  );
}
