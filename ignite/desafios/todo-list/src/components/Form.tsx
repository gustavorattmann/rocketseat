import { useState, type ChangeEvent, type FormEvent } from "react";

import { PlusCircleIcon } from "@phosphor-icons/react";

import styles from "./Form.module.css";

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
    <form className={styles.formTask} onSubmit={handleSubmit}>
      <input
        className={styles.inputTask}
        onChange={handleTextChange}
        value={textTask}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.buttonTask} type="submit">
        Criar <PlusCircleIcon size={16} />
      </button>
    </form>
  );
}
