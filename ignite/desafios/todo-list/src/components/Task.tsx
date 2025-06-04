import styles from "./Task.module.css";

import clipboard from "../assets/clipboard.png";

export function Task() {
  return (
    <div className={styles.boxTask}>
      <div className={styles.info}>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </div>
      <div className={styles.contentEmpty}>
        <img src={clipboard} alt="" />
        <p className={styles.principalText}>
          Você ainda não tem tarefas cadastradas
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
