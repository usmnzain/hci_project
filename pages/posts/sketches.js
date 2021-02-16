import React from "react";
import Nav from "../../components/Nav/Nav";
import SideMenu from "../../components/SideMenu/SideMenu";
import styles from "../Home.module.css";

export default function () {
  return (
    <div>
      <Nav previous="conceptual-design" next="prototypes" />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>Design Sketches</h1>
          <h2>Sketches</h2>
          <p>
            The final sketch was select by comparing the alternatives with the
            design of apps already in the market. I did a study on them,
            evaluated their UI and read reviews. This helped me select my own
            design
          </p>
          <div className={styles.image}>
            <img width="500px" src="/hci_4_1.jpg" />
            <img width="500px" src="/hci_4_2.jpg" />
            <img width="500px" src="/hci_4_3.jpg" />
          </div>

          <h2>Prelimary Interface Design</h2>
          <div className={styles.image}>
            <img width="500px" src="/hci_4_4.jpg" />
            <img width="500px" src="/hci_4_5.jpg" />
          </div>

          <h2>Storyboards</h2>
          <div className={styles.image}>
            <img width="800px" src="/hci_4_6.jpg" />
          </div>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}
