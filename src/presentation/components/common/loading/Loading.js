import React from "react";
import classes from "./Loading.module.css";

function Loading() {
  return (
    <div className={classes.loading}>
      <div className={classes.circle}></div>
    </div>
  );
}

export default Loading;
