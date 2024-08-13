import React from 'react'
import { NavLink } from 'react-router-dom'

function Nabar() {
  return (
    <div>
      <nav className='border-2 bg-slate-200 items-center py-4 flex flex-wrap justify-between px-5 text-xl'>
        <div className='flex flex-wrap justify-between w-80'>
        <NavLink className={(e)=> {return e.isActive?"text-slate-500":""}} to="/"><li className='list-none'>Home</li></NavLink>
        <NavLink className={(e)=> {return e.isActive?"text-slate-500":""}} to="/about"><li className='list-none'>About</li></NavLink>
        <NavLink className={(e)=> {return e.isActive?"text-slate-500":""}} to="/contact"><li className='list-none'>Contact</li></NavLink>
        </div>
        <NavLink className={(e)=> {return e.isActive?"text-slate-500":""}} to="/user"><li className='list-none p-2 border-2 rounded-xl border-blue-600 text-blue-500'>Add User</li></NavLink>
      </nav>
    </div>
  )
}

export default Nabar
