import { useState, type ChangeEvent, type FormEvent } from "react";

export function Form() {
  const [textTask, setTextTask] = useState<string>("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setTextTask("");
  }

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setTextTask(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        value={textTask}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit">Criar</button>
    </form>
  );
}
