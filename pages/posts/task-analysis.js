import React from "react";
import Nav from "../../components/Nav/Nav";
import styles from "../Home.module.css";

export default function () {
  return (
    <div>
      <Nav previous="proposal" next="conceptual-design" />

      <div className={styles.container}>
        <h1 className={styles.title}>Task Analysis</h1>

        <h2>User Analysis</h2>
        <p>
          The primary stakeholder in our app will be the app user or the
          customer.
        </p>
        <img width="700px" src="/persona.png" />

        <h2>Task Analysis</h2>
        <img width="500px" src="/hta-1.png" />
        <img width="500px" src="/hta-2.png" />

        <h2>Usability Requirment</h2>
        <img width="700px" src="/usability.jpg" />
      </div>
    </div>
  );
}
