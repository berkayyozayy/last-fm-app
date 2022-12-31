import styles from "./Card.module.css";

function Card({ image, label, count, listeners }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["image"]}>
        <img src={image} alt={label} />
      </div>
      <div className={styles["content"]}>
        <div className={styles["info"]}>
          <p className={styles["title"]}>User</p>
          <p>{label}</p>
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
