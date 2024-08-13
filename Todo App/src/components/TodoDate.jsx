import React,{useState, useEffect} from 'react'

function TodoDate({times}) {
  const [time, setTime] = useState()

     useEffect(() => {
    let interval =  setInterval(()=>{
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formarttedTime = now.toLocaleTimeString();
      setTime(`${formattedDate} - ${formarttedTime}`)
    },1000)
    return () => clearInterval(interval)

  }, [])
  return (
    <>
      <h2 className='text-2xl mt-3 text-white'>{time}</h2>
      {/* <h2 className="text-2xl mt-3 text-white">Date - Time</h2> */}
    </>
  )
}

export default TodoDate
