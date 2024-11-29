import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programação usando a documentação do React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Ler Livros",
      description: "Ler livros de programação e de ficção",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer Exercícios",
      description: "Fazer exercícios físicos para manter a saúde",
      isCompleted: false,
    },
  ]);

  function onCheckTaskClick(taskId) {
      const newTask = tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
    });
    setTasks(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onCheckTaskClick={onCheckTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
}

export default App;
