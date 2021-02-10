import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  const {
    container,
    title,
    description,
    grid,
    card,
    main,
    footer,
    link,
  } = styles;
  return (
    <div className={container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={main}>
        <h1 className={title}>Team assignment posts</h1>

        <p className={description}>Click on a post to read full report.</p>

        <div className={grid}>
          <Link href="/posts/proposal">
            <a className={card}>
              <h3 className={styles.h3}>
                Team Assignment 1 - Project Report&rarr;
              </h3>
              <p className={styles.p}>
                In today’s world, finding the perfect match for children is a
                tedious task for parents..... Read More.
              </p>
            </a>
          </Link>
          <Link href="/posts/task-analysis">
            <a className={card}>
              <h3 className={styles.h3}>
                Team Assignment 2 - Task Analysis&rarr;
              </h3>
              <p className={styles.p}>
                In today’s world, finding the perfect match for children is a
                tedious task for parents..... Read More.
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={footer}>Developed by Usman Zain</footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
