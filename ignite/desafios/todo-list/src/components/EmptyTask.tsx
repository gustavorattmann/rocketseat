import clipboard from "../assets/clipboard.png";

import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.contentEmpty}>
      <img src={clipboard} alt="" />
      <p className={styles.principalText}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
