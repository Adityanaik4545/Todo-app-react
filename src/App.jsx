import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <div className="container mx-auto my-4 bg-violet-100 p-5 rounded-2xl min-h-[80vh]">
      <div className="addtodo my-5">
      <h1 className='text-3xl font-semibold'>Add Todos</h1>
      <input type="text" className='bg-white w-1/2' />
      <button className='bg-violet-400 hover:bg-violet-600 hover:text-white px-5 mx-2 rounded-lg transition-all duration-400 font-semibold'>Add</button>
      </div>
      <h2 className='text-lg font-bold'>Your Todos</h2>
      <div className="todos">
        <div className="todo flex">
        <div className="text">Lorem ipsum dolor, sit amet consectetur  sapiente tempora alias suscipit </div>
        <div className="btns">
          <button className='bg-violet-400 hover:bg-violet-600 hover:text-white px-5 mx-1 rounded-lg transition-all duration-400 font-semibold'>Edit</button>
          <button className='bg-violet-400 hover:bg-violet-600 hover:text-white px-5 mx-1 rounded-lg transition-all duration-400 font-semibold'>Delete</button>
        </div>
        </div>
      </div>
  </div>
    </>
  )
}

export default App
