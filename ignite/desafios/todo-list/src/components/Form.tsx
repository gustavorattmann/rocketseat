import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type InvalidEvent,
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

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTextTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <form className={styles.formTask} onSubmit={handleSubmit}>
      <input
        className={styles.inputTask}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        value={textTask}
        placeholder="Adicione uma nova tarefa"
        name="task"
        required
      />
      <button className={styles.buttonTask} type="submit">
        Criar <PlusCircleIcon size={16} />
      </button>
    </form>
  );
}
