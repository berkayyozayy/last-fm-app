import React from "react";
import styles from "./ListView.module.css";

function ListView({ image, label, count, listeners, showListeners, url }) {
  return (
    <div className={styles["list-container"]}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className={styles.list}>
          <div className={styles.card}>
            <div className={styles["image-wrapper"]}>
              <img src={image} alt={label} />
            </div>
            <div className={styles.content}>
              <p className={styles.title}>{label}</p>
              <p className={styles.playCount}>Playcount: {count}</p>
              {showListeners && <p>Listeners: {listeners}</p>}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ListView;
