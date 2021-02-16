import React from "react";
import styles from "./SideMenu.module.css";
import Link from "next/link";

export default function SideMenu() {
  return (
    <div className={styles.sidemenu}>
      <h2 style={{ color: "indianred" }}>Post Links</h2>
      <ol className={styles.ol}>
        <li className={styles.card}>
          <Link className={styles.link} href="/posts/proposal">
            <a className={styles.linkA}>Proposal</a>
          </Link>
        </li>
        <li className={styles.card}>
          <Link className={styles.link} href="/posts/task-analysis">
            <a className={styles.linkA}>Task Analysis</a>
          </Link>
        </li>
        <li className={styles.card}>
          <Link className={styles.link} href="/posts/conceptual-design">
            <a className={styles.linkA}>Conceptual Design</a>
          </Link>
        </li>
        <li className={styles.card}>
          <Link className={styles.link} href="/posts/sketches">
            <a className={styles.linkA}>Design Sketches</a>
          </Link>
        </li>
        <li className={styles.card}>
          <Link className={styles.link} href="/posts/prototypes">
            <a className={styles.linkA}>Prototype</a>
          </Link>
        </li>
        <li className={styles.card}>
          <Link className={styles.link} href="/posts/heuristics">
            <a className={styles.linkA}>Heuristic Evaluation</a>
          </Link>
        </li>
      </ol>
    </div>
  );
}
