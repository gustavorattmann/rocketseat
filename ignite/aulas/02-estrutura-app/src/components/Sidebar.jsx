import { PencilLineIcon } from "@phosphor-icons/react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/gustavorattmann.png"
          alt=""
        />
        <strong>Gustavo Rattmann</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLineIcon size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
