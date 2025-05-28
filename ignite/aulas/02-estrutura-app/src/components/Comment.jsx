import { ThumbsUpIcon, TrashIcon } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gustavorattmann.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Rattmann</strong>
              <time title="27 de Maio às 22:20" dateTime="2025-05-27 22:20:57">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <TrashIcon size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUpIcon />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
