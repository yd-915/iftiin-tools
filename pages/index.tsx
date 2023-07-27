import Image from "next/image";
import ToolPage from "../utils/ToolPage";
import styles from "./index.module.scss";
import CheckmarkIcon from "../svg/checkmark.svg";
import classNames from "classnames";
import GitHubIcon from "../svg/github.svg"

const Home: ToolPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Iftiin-Tools</span>
        </h1>
        <p className={styles.description}>
          Your all-in-one developer toolbox
        </p>
        <div className={styles.privacy}>
          <Image src="/images/tools.png" width={220} height={220} alt="" />
          <h2>Your privacy: guaranteed!</h2>
          <p>Your data won&apos;t leave your browser.</p>
          <ul>
            <li>
              <span className={styles.img}>
                <CheckmarkIcon />
              </span>
              No cookies
            </li>
            <li>
              <span className={styles.img}>
                <CheckmarkIcon />
              </span>
              No logging
            </li>
            <li>
              <span className={styles.img}>
                <CheckmarkIcon />
              </span>
              No IP fingerprinting
            </li>
            <li>
              <span className={styles.img}>
                <CheckmarkIcon />
              </span>
              No exception reports
            </li>
            <li>
              <span className={styles.img}>
                <CheckmarkIcon />
              </span>
              No popups
            </li>
             <li>
              <span className={classNames(styles.img, styles.github)}>
              </span>
              <a
                href="https://github.com/luin/bazinga"
                target="_blank"
                rel="noreferrer"
              >
                Fully open source
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
