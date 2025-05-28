import Header from "./components/Header";
import { Post } from "./Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Gustavo Rattmann"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi est, culpa necessitatibus nulla magni dolores eos provident qui molestiae rem voluptate cum fugiat impedit eum non labore repellat doloremque debitis?"
      />
      <Post author="Lucia" content="Um novo post muito legal" />
    </div>
  );
}

// Default Exports: Declare name in import (Ex: export default App)
// Named Exports: Declare name in creation of function (export function App)
