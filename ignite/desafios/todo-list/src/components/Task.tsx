import styles from "./Task.module.css";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

import { Card } from "./Card";
import { EmptyTask } from "./EmptyTask";

export interface TaskList {
  id: string;
  checked: boolean;
  text: string;
}

interface TaskProps {
  tasks: TaskList[];
  setTasks: Dispatch<SetStateAction<TaskList[]>>;
}

export function Task(props: TaskProps) {
  const { tasks, setTasks } = props;

  const [countTaskCreated, setCountTaskCreated] = useState<number>(0);
  const [countTaskClosed, setCountTaskClosed] = useState<string>("0");

  useEffect(() => {
    setCountTaskCreated(tasks?.length || 0);

    const getAllChecked = tasks?.filter((elem) => elem?.checked);

    setCountTaskClosed(
      getAllChecked?.length && tasks?.length
        ? `${getAllChecked.length} de ${tasks.length}`
        : "0"
    );
  }, [tasks]);

  return (
    <div className={styles.boxTask}>
      <div className={styles.info}>
        <div>
          <p>Tarefas criadas</p>
          <span>{countTaskCreated}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>{countTaskClosed}</span>
        </div>
      </div>
      {tasks?.length ? (
        tasks.map((item) => (
          <Card key={item.id} id={item.id} tasks={tasks} setTasks={setTasks} />
        ))
      ) : (
        <EmptyTask />
      )}
    </div>
  );
}
