import styles from "./Card.module.css";

function Card({ image, label, count, listeners }) {
  return (
    <div className={styles["card-wrapper"]}>
      <img src={image} className={styles["card-image"]} alt="blabla" />
      <div className={styles["content"]}>
        <h3>{label}</h3>
        <p>Playcount: {count}</p>
        <p>Listeners: {listeners}</p>
      </div>
    </div>
  );
}

export default Card;
