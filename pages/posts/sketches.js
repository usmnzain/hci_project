import React from "react";
import Nav from "../../components/Nav/Nav";
import styles from "../Home.module.css";

export default function () {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.title}>Design Sketches</h1>
        <h2>Sketches</h2>
        <p>
          The final sketch was select by comparing the alternatives with the
          design of apps already in the market. I did a study on them, evaluated
          their UI and read reviews. This helped me select my own design
        </p>
        <img classname={styles.imgage} src="/hci_4_1.jpg" />
        <img src="/hci_4_2.jpg" />
        <img src="/hci_4_3.jpg" />

        <h2>Prelimary Interface Design</h2>
        <img src="/hci_4_4.jpg" />
        <img src="/hci_4_5.jpg" />

        <h2>Storyboards</h2>
        <img src="/hci_4_6.jpg" />
      </div>
    </div>
  );
}
