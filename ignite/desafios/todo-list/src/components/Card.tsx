import { TrashIcon } from "@phosphor-icons/react";

import styles from "./Card.module.css";

import type { TaskList } from "./Task";

import {
  useEffect,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";

interface CardProps {
  id: string;
  tasks: TaskList[];
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export function Card(props: CardProps) {
  const { id, tasks, setTasks } = props;

  const [textTask, setTextTask] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const taskChecked =
      tasks?.map((elem) => {
        if (elem?.id === event.currentTarget.id) {
          return {
            ...elem,
            checked: event.currentTarget.checked,
          };
        }

        return elem;
      }) || [];

    setTasks(taskChecked);
  }

  function handleDelete() {
    const taskRemoved = tasks?.filter((elem) => elem?.id !== id);

    setTasks(taskRemoved);
  }

  useEffect(() => {
    const taskChecked = tasks?.filter((elem) => elem?.id === id);

    if (taskChecked?.length) {
      setTextTask(taskChecked[0]?.text);
      setChecked(taskChecked[0]?.checked);
    }
  }, [id, tasks]);

  return (
    <div className={styles.contentList}>
      <div className={styles.card}>
        <div className={styles.boxCheck}>
          <label htmlFor={id}>
            <input
              type="checkbox"
              id={id}
              checked={checked}
              onChange={handleChange}
            />
            <span className={styles.checkmark}></span>
          </label>
        </div>
        <p className={checked ? styles.confirmed : ""}>{textTask}</p>
        <button type="button" onClick={handleDelete}>
          <TrashIcon size={20} />
        </button>
      </div>
    </div>
  );
}
