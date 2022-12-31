import React from "react";
import styles from "./ListView.module.css";

function ListView({
  image,
  label,
  name,
  count,
  listeners,
  showListeners,
  url,
}) {
  return (
    <div className={styles["list-container"]}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className={styles.list}>
          <div className={styles.card}>
            <div className={styles["image-wrapper"]}>
              <img src={image} alt={label} />
            </div>
            <div className={styles.content}>
              <p className={styles["name"]}>{name}</p>
              <p className={styles.title}>{label}</p>
              <hr />
              <span className={styles.playCount}>Playcount: {count}</span>
              {showListeners && <span>Listeners: {listeners}</span>}
            </div>
          </div>
        </div>
      </a>
      <hr />
    </div>
  );
}

export default ListView;
