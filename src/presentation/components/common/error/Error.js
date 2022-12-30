import React from "react";
import classes from "./Error.module.css";

function Error({ message }) {
  return (
    <div className={classes.error}>
      <h3>{message}</h3>
    </div>
  );
}

export default Error;
