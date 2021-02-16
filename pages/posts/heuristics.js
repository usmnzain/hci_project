import React from "react";
import Nav from "../../components/Nav/Nav";
import SideMenu from "../../components/SideMenu/SideMenu";
import styles from "../Home.module.css";

export default function Heuristics() {
  return (
    <div>
      <Nav previous="prototypes" />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>
            Heuristic Evaluation & Prototype Revision
          </h1>

          <h2>Updated Prototype</h2>
          <iframe
            width="450"
            height="900"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvcKEY6rWMsxZPV8ik55rVG%2FUntitled%3Fnode-id%3D1%253A2%26scaling%3Dscale-down"
            allowfullscreen
          ></iframe>

          <h2>Response to Hueristic Evaluation</h2>
          <a href="https://www.figma.com/proto/vcKEY6rWMsxZPV8ik55rVG/Untitled?node-id=1%3A2&scaling=scale-down">
            Link to prototype
          </a>
          <p>
            As the heuristic results came in, it was evident that most of the
            people were not finding the primary color very easy to read. Some
            commented that it was too bright and was the contrast it was forming
            with the secondary color was too stark
          </p>
          <p>
            My response to the evaluation was that I changed the app's primary
            color to something lighter on the eye. Finding the right color was
            challenge. I had to look for a color that forms a nice contrast with
            the other colors of the app and was also color blind friendly. Also,
            the color should also go with the overall feel of the app.
          </p>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}
