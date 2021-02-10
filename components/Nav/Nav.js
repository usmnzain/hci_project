import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav({ previous, next }) {
  return (
    <div>
      <div className={styles.header}>
        {previous && (
          <h3>
            <Link href={`/posts/${previous}`}>
              <a>&larr; previous post</a>
            </Link>
          </h3>
        )}
        <h3>
          <Link href="/">
            <a>&#127968; home</a>
          </Link>
        </h3>
        {next && (
          <h3>
            <Link href={`/posts/${next}`}>
              <a>next post &rarr;</a>
            </Link>
          </h3>
        )}
      </div>
      <hr />
    </div>
  );
}
