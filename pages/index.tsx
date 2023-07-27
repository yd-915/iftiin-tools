import Image from "next/image";
import ToolPage from "../utils/ToolPage";
import styles from "./index.module.scss";
import CheckmarkIcon from "../svg/checkmark.svg";
import GitHubIcon from "../svg/github.svg";
import classNames from "classnames";

const Home: ToolPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Iftiin-Tool</span>
        </h1>
        <p className={styles.description}>
          Your all-in-one developer toolbox
        </p>
        <div className={styles.privacy}>
          <Image src="/images/lock.png" width={115} height={170} alt="" />
          <h2>Your privacy is guaranteed</h2>
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
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
