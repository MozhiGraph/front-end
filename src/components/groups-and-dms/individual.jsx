import styles from "./individual.module.css";

export default function Individual({name, image, id, currentDialog ,setCurrentDialog}) {
  if (name.length > 20) {
    name = name.slice(0, 20) + "...";
  }
  return (
    <div className={styles.individual} onClick={() => setCurrentDialog(id)} style={{ backgroundColor: currentDialog === id ? "rgba(255, 255, 255, 0.3)" : "black" }}>
        <img src={image} alt={name[0]} className={styles.image} />
        <p className={styles.name}>{name}</p>
    </div>
  );
}
