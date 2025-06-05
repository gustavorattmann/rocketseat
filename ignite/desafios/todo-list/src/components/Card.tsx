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
  item: TaskList;
  tasks: TaskList[];
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export function Card(props: CardProps) {
  const { item, tasks, setTasks } = props;

  const [checked, setChecked] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);

    const getAllTasksExcludeEdited =
      tasks?.filter((elem) => elem?.id !== item?.id) || [];

    const addCheckedInTask =
      tasks
        ?.filter((elem) => elem?.id === item?.id)
        ?.map((elem) => {
          return {
            ...elem,
            checked: event.target.checked,
          };
        }) || [];

    if (addCheckedInTask?.length)
      setTasks([...getAllTasksExcludeEdited, ...addCheckedInTask]);
  }

  function handleDelete() {
    const taskRemoved = tasks?.filter((elem) => elem?.id !== item?.id);

    setTasks(taskRemoved);
  }

  useEffect(() => {
    setChecked(item?.checked);
  }, [item]);

  return (
    <div className={styles.contentList}>
      <div className={styles.card}>
        <div className={styles.boxInput}>
          <input type="checkbox" checked={checked} onChange={handleChange} />
        </div>
        <p>{item.text}</p>
        <button type="button" onClick={handleDelete}>
          <TrashIcon size={20} />
        </button>
      </div>
    </div>
  );
}
