import { useState } from "react";
import { Task } from "@/types/task";
import { tasks } from "@/data/tasks";

export const ArrayList = () => {
  const [toDoList, setTodoList] = useState<Task[]>(tasks);
  const [input, setInput] = useState("");

  function addTasks() {
    if (input.trim() !== "") {
      let newTasks = [...toDoList];
      newTasks.push({ id: newTasks.length + 1, label: input, checked: false });
      setTodoList(newTasks);
      setInput("");
    } else {
      alert("Cant add blank to tasks");
    }
  }

  function removeTask(id: number) {
    let newList = toDoList.filter((tasks) => tasks.id !== id);
    setTodoList(newList);
  }

  function updateTask(id: number) {
    if (input.trim() !== "") {
      let newList = [...toDoList];
      newList.map((t) => {
        if (t.id === id) {
          t.label = input;
          setInput("");
        }
      });
      setTodoList(newList);
    } else {
      alert("Cant be blank");
    }
  }

  function completeTask(id: number) {
    let newList = [...toDoList];
    newList.map((t) => {
      if (t.id === id) {
        t.checked = !t.checked;
      }
    });
    setTodoList(newList);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="bg-slate-800 p-3 rounded-md">
        <input
          className="text-black outline-none rounded-md p-2"
          type="text"
          value={input}
          name="task"
          onChange={(text) => setInput(text.target.value)}
        />
        <button
          className="ml-2 px-2 py-1 bg-sky-500 rounded-md"
          onClick={addTasks}
        >
          Adicionar
        </button>
      </div>
      {toDoList.map((task) => (
        <div className="px-2 py-1" key={task.id}>
          <input
            className="mr-2"
            type="checkbox"
            onClick={() => completeTask(task.id)}
          />
          {task.checked ? (
            <span className="line-through">{task.label}</span>
          ) : (
            <span>{task.label}</span>
          )}

          <button
            className="bg-red-500 rounded-md px-1 ml-3"
            onClick={() => removeTask(task.id)}
          >
            Deletar
          </button>
          <button
            className="bg-green-500 rounded-md px-1 ml-3"
            onClick={() => updateTask(task.id)}
          >
            Alterar
          </button>
        </div>
      ))}
    </div>
  );
};
