import styles from "./individual.module.css";

export default function Individual({name, image}) {
  if (name.length > 20) {
    name = name.slice(0, 20) + "...";
  }
  return (
    <div className={styles.individual}>
        <img src={image} alt={name} className={styles.image} />
        <p className={styles.name}>{name}</p>
    </div>
  );
}
