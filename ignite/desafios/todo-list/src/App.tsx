import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Task, type TaskList } from "./components/Task";

import styles from "./App.module.css";
import { useState } from "react";

export function App() {
  const [tasks, setTasks] = useState<TaskList[]>([]);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Form tasks={tasks} setTasks={setTasks} />
          <Task tasks={tasks} setTasks={setTasks} />
        </main>
      </div>
    </div>
  );
}
