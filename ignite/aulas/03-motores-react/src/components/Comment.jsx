import { ThumbsUpIcon, TrashIcon } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gustavorattmann.png" />
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
          <p>{content}</p>
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
