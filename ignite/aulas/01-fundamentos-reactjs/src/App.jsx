import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

// Default Exports: Declare name in import (Ex: export default App)
// Named Exports: Declare name in creation of function (export function App)
