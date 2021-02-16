import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav({ previous, next }) {
  return (
    <div>
      <div className={styles.header}>
        {previous && (
          <h3>
            <Link className={styles.link} href={`/posts/${previous}`}>
              <a className={styles.linkA}>&larr; previous post</a>
            </Link>
          </h3>
        )}
        <h3>
          <Link href="/" className={styles.link}>
            <a className={styles.linkA}>&#127968; home</a>
          </Link>
        </h3>
        {next && (
          <h3>
            <Link href={`/posts/${next}`} className={styles.link}>
              <a className={styles.linkA}>next post &rarr;</a>
            </Link>
          </h3>
        )}
      </div>
      <hr className={styles.hr} />
    </div>
  );
}
