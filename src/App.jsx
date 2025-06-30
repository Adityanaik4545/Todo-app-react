import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(() => {
    const todoString = localStorage.getItem("todos");
    return todoString ? JSON.parse(todoString) : [];
  });
  const [completedTodos,setCompletedTodos]=useState(true)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id == id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    
  }
  const toggledFinish = () => {
      setCompletedTodos(!completedTodos)
    
  }
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    
  }
  const handleChange = (e) => {
    setTodo(e.target.value)

  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newToddos = [...todos];
    newToddos[index].isCompleted = !newToddos[index].isCompleted;
    setTodos(newToddos)
    
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-4 bg-violet-200 p-5 rounded-2xl min-h-[80vh] w-[90vw] md:w-1/2">
      <h1 className='text-center font-bold text-4xl'>U-Task</h1>
        <div className="addtodo relative flex flex-col gap-4 my-5">
          <h3 className='text-lg font-bold '>Add Todo</h3>
          <input onChange={handleChange} value={todo} type="text" className='bg-white p-2 w-full border-none outline-none rounded-lg' />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-400 absolute right-[-15px] bottom-0  hover:bg-violet-600 hover:text-white  px-5 mx-2 w-24 h-10 rounded-lg transition-all duration-400 font-semibold'>Add</button>
        </div>
        <input onChange={toggledFinish} type="checkbox" checked={completedTodos}  /> <span>Show Finished</span>
        <div className='h-[1px] opacity-9 bg-black my-3'></div>
        <h2 className='text-lg py-2 font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-3'>No Todos</div>}
          {todos.map(item => {
            return(completedTodos || !item.isCompleted) && <div className=" todo flex justify-between   my-3">
              <div className='flex gap-5'>
                <input name={item.id} type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="btns flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-400 hover:bg-violet-600 hover:text-white text-xl px-5 mx-1  py-1 rounded-lg transition-all duration-400 font-bold'><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-400 hover:bg-violet-600 hover:text-white text-xl px-5 mx-1 py-1 rounded-lg transition-all duration-400 font-bold'><MdDeleteOutline /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
