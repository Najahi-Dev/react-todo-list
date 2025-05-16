import { useState } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify'
import Todo from './assets/todolist/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    toast.error("Task deleted successfully!");
  };

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
      toast.success("Task added successfully!");
    }
  };

  return (
    <>
      <h2>📝Simple To-DO List App</h2>
      <div className='container'>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter your task' />
        <button onClick={addTodo}>Add Task</button>
      </div>

      <div className="separator"></div>

      <ul>
        {todos.map((todo, index) => (
          <Todo key={index} task={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>

      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      // transition={Bounce}
      />

    </>
  )
}

export default App
