import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./Post";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gustavo Rattmann"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est, culpa necessitatibus nulla magni dolores eos provident qui molestiae rem voluptate cum fugiat impedit eum non labore repellat doloremque debitis?"
          />
          <Post author="Lucia" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}

// Default Exports: Declare name in import (Ex: export default App)
// Named Exports: Declare name in creation of function (export function App)
