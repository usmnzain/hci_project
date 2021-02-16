import React from "react";
import Nav from "../../components/Nav/Nav";
import styles from "../Home.module.css";

export default function Heuristics() {
  return (
    <div>
      <Nav previous="prototypes" />
      <div>
        <h1 className={styles.title}>
          Heuristic Evaluation & Prototype Revision
        </h1>

        <h2>Updated Prototype</h2>
        <iframe
          width="450"
          height="900"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJmZa15weqAB8DBCfVQwhgu%2Frishta-app-2%3Fnode-id%3D77%253A283%26scaling%3Dscale-down"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
