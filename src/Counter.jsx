import React from 'react'
import "./count.css"

const Counter = ({cnt, plus,minus,reset}) => {
  return (
    <div align="center" className='ab'>
        <h1>Counter App</h1>
        <h2>{cnt}</h2>
        <button  onClick={ () => plus()}>+</button>
        {
          cnt == 0 ?(
        <button disabled  onClick={ () => minus()}>-</button>

          ):(
        <button  onClick={ () => minus()}>-</button>

          )
        }

        {
          cnt == 0 ?(
        <button disabled onClick={ () => reset()}>0</button>

          ):(
        <button onClick={ () => reset()}>0</button>

          )
        }
    </div>
  )
}

export default Counter
