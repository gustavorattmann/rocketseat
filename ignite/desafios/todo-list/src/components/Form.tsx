import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from "react";

import { PlusCircleIcon } from "@phosphor-icons/react";

import styles from "./Form.module.css";

import type { TaskList } from "./Task";
interface FormProps {
  tasks: TaskList[];
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export function Form(props: FormProps) {
  const { tasks, setTasks } = props;

  const [textTask, setTextTask] = useState<string>("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        checked: false,
        text: textTask,
      },
    ]);

    setTextTask("");
  }

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setTextTask(event.target.value);
  }

  return (
    <form className={styles.formTask} onSubmit={handleSubmit}>
      <input
        className={styles.inputTask}
        onChange={handleTextChange}
        value={textTask}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.buttonTask} type="submit">
        Criar <PlusCircleIcon size={16} />
      </button>
    </form>
  );
}
