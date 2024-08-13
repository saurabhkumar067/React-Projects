import React from 'react'

function Home() {
  return (
    <div className='bg-slate-400 h-screen'>
    <div className='flex w-2/3 m-auto flex-wrap pt-44 justify-center items-center text-center'>
      <h1 className='text-4xl  font-bold'>Hello People</h1>
      <p className='my-5'>Quickly design and customize responsive mobile-first sites with Tailwind the world's most popular front-end open source toolkit, featuring Sass variables. responsive flex system, extensive prebuilt components and powerful JavaScript plugins.</p>
      <button className='p-3 bg-slate-700 rounded-md cursor-pointer mr-5 hover:bg-slate-500 duration-700'>Getting Stated</button>
      <button className='p-3 bg-orange-700 rounded-md cursor-pointer mr-5 hover:bg-orange-500 duration-700'>Contact-Us</button>
    </div>
    </div>
  )
}

export default Home
