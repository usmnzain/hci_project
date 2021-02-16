import React from "react";
import Nav from "../../components/Nav/Nav";
import styles from "../Home.module.css";

export default function Prototypes() {
  return (
    <div>
      <Nav previous="sketches" next="heuristics" />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Prototypes - Computer and Paper Based
          </h1>
          <h2>Prototype Link</h2>
          <a href="https://www.figma.com/proto/JmZa15weqAB8DBCfVQwhgu/rishta-app-2?node-id=29%3A26&scaling=scale-down">
            Figma Prototype
          </a>
          <h2>Paper Prototype</h2>
          <div className={styles.image}>
            <img width="500px" src="/hci_4_1.jpg" />
            <img width="500px" src="/hci_4_2.jpg" />
            <img width="500px" src="/hci_4_3.jpg" />
          </div>
          <h2>Interactive Prototype</h2>
          You can interact with the prototype by clicking submit buttons and
          menu buttons in the bottom section of the app
          <iframe
            width="450"
            height="900"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJmZa15weqAB8DBCfVQwhgu%2Frishta-app-2%3Fnode-id%3D29%253A26%26scaling%3Dscale-down"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
