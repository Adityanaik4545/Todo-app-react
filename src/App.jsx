import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {

  }
  const handleDelete = (e,id) => {
    let newTodos=todos.filter(item=>{
      return item.id!==id
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
      <div className="container mx-auto my-4 bg-violet-100 p-5 rounded-2xl min-h-[80vh]">
        <div className="addtodo my-5">
          <h1 className='text-3xl font-semibold'>Add Todos</h1>
          <input onChange={handleChange} value={todo} type="text" className='bg-white w-1/2' />
          <button onClick={handleAdd} className='bg-violet-400 hover:bg-violet-600 hover:text-white px-5 mx-2 rounded-lg transition-all duration-400 font-semibold'>Add</button>
        </div>
        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length==0 && <div className='m-3'>No Todos</div> }
          {todos.map(item => {
            return <div className="todo flex w-1/2 justify-between my-3">
              <input name={item.id} type="checkbox" onChange={handleCheckbox} value={item.isCompleted} />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="btns">
                <button onClick={handleEdit} className='bg-violet-400 hover:bg-violet-600 hover:text-white px-5 mx-1 rounded-lg transition-all duration-400 font-semibold'>Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-400 hover:bg-violet-600 hover:text-white px-5 mx-1 rounded-lg transition-all duration-400 font-semibold'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
