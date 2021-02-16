import React from "react";
import Nav from "../../components/Nav/Nav";
import styles from "../Home.module.css";

export default function () {
  return (
    <div>
      <Nav next="task-analysis" />
      <div className={styles.container}>
        <h1 className={styles.title}>Learn Next</h1>

        <h2>Problem</h2>
        <p>
          In today’s world, finding the perfect match for children is a tedious
          task for parents. Newer generations are reluctant to opt for arranged
          marriages and finding a new match for a divorcee is harder than ever.
          The census conducted in 1997 listed the married population as about 63
          percent of those above the legal age of consent. Although 2017 results
          have yet to be completely collated and released, well-placed sources
          claim that the percentage of married people has gone down. The average
          age at which people are getting married has also gone up
          significantly, particularly among young women. Meanwhile, the divorced
          population, listed as 0.34 percent in 1998, has now increased to five
          or six percent. All these numbers show that a large number of
          Pakistani population are unmarried for whatever reason. This is the
          problem that our app will try to solve, to provide a safe and secure
          environment for people to mingle and connect virtually effectively
          before meeting first. A simple phone app will make it easier for
          people to find their match, themselves, without sacrificing much of
          their time.
        </p>
        <h2>Target Users</h2>
        <p>
          The target users for this app will be teenagers aged 18 and above.
        </p>
        <h2>Solution</h2>
        <p>
          The problem described above is what our app will try to solve, to
          provide a safe and secure environment for people to mingle and connect
          virtually effectively before meeting first. A simple phone app will
          make it easier for people to find their match, themselves, without
          sacrificing much of their time. Our app will use a complex AI
          algorithm and use the information entered by the user and find people
          with similar interests as them. Our app will also devise an algorithm
          to find any anomaly or irregular behaviour of the user to keep the app
          secure from predators.
        </p>
        <h2> Role and Tasks</h2>
        <p>
          This is a solo project of Usman Zain ul Abedin. He will be the product
          designer and project manager.
        </p>
      </div>
    </div>
  );
}
