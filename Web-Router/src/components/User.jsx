import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams()
  return (
    <div className='text-center text-8xl bg-slate-400 py-60'>
      I am <span className='text-blue-700'>{params.username}</span>
    </div>
  )
}

export default User
