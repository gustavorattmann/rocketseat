import todoLogo from "../assets/todo-logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <div className={styles.box}>
        <img src={todoLogo} alt="Logo" />
        <div className={styles.boxText}>
          <h1 className={styles.firstText}>to</h1>
          <h1 className={styles.secondText}>do</h1>
        </div>
      </div>
    </header>
  );
}
