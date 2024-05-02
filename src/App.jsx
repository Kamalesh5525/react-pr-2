import {useState} from 'react'
import Counter from './Counter'

function App () {
    const [no,setNo]=useState(0)
    const Increment = () => {
        setNo(no + 1)
    }
    const decrement = () => {
        setNo(no - 1)
    }
    const reset = () => {
      let  Count = 0;
        setNo(Count)
    }
  return (
   
       <Counter 
       cnt={no}
       plus={Increment}
       minus={decrement}
       reset={reset}

       />
   
  )
}

export default App
