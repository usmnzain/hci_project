import React from "react";
import Nav from "../../components/Nav/Nav";
import SideMenu from "../../components/SideMenu/SideMenu";
import styles from "../Home.module.css";

export default function () {
  return (
    <div>
      <Nav previous="task-analysis" next="sketches" />
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className={styles.title}>Conceptual Design</h1>
          <h2>1. Use Case</h2>
          <img width="500px" src="/usecase.png" />

          <h2>2. Metaphors</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th} scope="col">
                  Task
                </th>
                <th className={styles.th} scope="col">
                  Metaphors
                </th>
                <th className={styles.th} scope="col">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.td}>Sign Up</td>
                <td className={styles.td}>Form </td>
                <td className={styles.td}>
                  The metaphor "form" because it gives an idea that user data
                  will be entered here.
                </td>
              </tr>
              <tr>
                <td className={styles.td}>Sign In</td>
                <td className={styles.td}>Form</td>
                <td className={styles.td}>
                  The metaphor "form" is used because it gives an idea that user
                  data will be entered here.
                </td>
              </tr>
              <tr>
                <td className={styles.td}>Profile</td>
                <td className={styles.td}>Dashboard, Resume</td>
                <td className={styles.td}>
                  The metaphor "dashboard" and "resume" is used because it shows
                  that this the main area where user can setup and change
                  settings etc.
                </td>
              </tr>
              <tr>
                <td className={styles.td}>Search</td>
                <td className={styles.td}>Cards, brochure </td>
                <td className={styles.td}>
                  The metaphor "card" and "brochure" best describe the task as a
                  card with some detail will be displayed.
                </td>
              </tr>
              <tr>
                <td className={styles.td}>List Candidates</td>
                <td className={styles.td}>Directory, Menu </td>
                <td className={styles.td}>
                  The metaphor "directory" and "menu" best describe this
                  interaction screen.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <SideMenu />
      </div>
    </div>
  );
}
