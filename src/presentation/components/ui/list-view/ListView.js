import React from "react";
import classes from "./ListView.module.css";

function ListView({ image, label, count, listeners, showListeners, url }) {
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <div className={classes.list}>
          <div className={classes.card}>
            <img className={classes.image} src={image} alt={label} />
            <div className={classes.content}>
              <p className={classes.title}>{label}</p>
              <p className={classes.playCount}>Playcount: {count}</p>
              {showListeners && <p>Listeners: {listeners}</p>}
            </div>
          </div>
          <hr />
        </div>
      </a>
    </>
  );
}

export default ListView;
