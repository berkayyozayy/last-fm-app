import styles from "./Card.module.css";

function Card({ image, title, label, count, listeners }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["image"]}>
        <img src={image} alt={label} />
      </div>
      <div className={styles["content"]}>
        <div className={styles["info"]}>
          <p className={styles["title"]}>{title}</p>
          <p className={styles["label"]}>{label}</p>
        </div>
        <div className={styles["sub-info"]}>
          <p>Playcount: {count}</p>
          <p>Listeners: {listeners}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
