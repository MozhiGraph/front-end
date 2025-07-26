import styles from "./individual.module.css";

export default function Individual({name, image, desc}) {
    if (desc.length > 30) {
        desc = desc.slice(0, 30) + '...';
    }
  return (
    <div className={styles.individual}>
        <img src={image} alt={name} className={styles.image} />
        <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{desc}</p>
        </div>
    </div>
  );
}
