import React, { useEffect } from 'react'

const UseEffect_Unmount = () => {
useEffect(() => {
    const timeout = setInterval(() => {
        console.log('call api')
    }, 1000)

return () => {
    //return trong bất kì useEffect nào cũng sẽ kích hoạt khi component đó mất khỏi giao diện
    clearInterval(timeout)
}

}, [])

  return (
    <div className='container'>
        
    </div>
  )
}

export default UseEffect_Unmount