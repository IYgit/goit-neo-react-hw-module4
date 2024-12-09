import React from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <TailSpin
        height="80"
        width="80"
        color="#3f51b5"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
