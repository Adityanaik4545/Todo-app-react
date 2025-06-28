import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-500 text-white py-2 '>
        <div className="logo font-bold text-lg mx-3">
            Task
        </div>
        <ul className='flex font-semibold gap-8 mx-9'>
            <li className='cursor-pointer hover:font-light'>Home</li>
            <li className='cursor-pointer hover:font-light'>List</li>
            <li className='cursor-pointer hover:font-light'>contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
