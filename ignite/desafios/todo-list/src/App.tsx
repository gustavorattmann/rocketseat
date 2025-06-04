import { Form } from "./components/Form";
import { Header } from "./components/Header";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <Form />
        </div>
      </main>
    </div>
  );
}
