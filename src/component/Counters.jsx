import React from 'react'
import { useState } from 'react'
import './Counters.css'

export default function Counters({count,setCount}) {
   // const [count, setCount] = useState(0);

    function Increment() {
        if (count < 20) {
            setCount(count + 1);
        }
    }

    function Decrement() {
        if (count  > 0) {
            setCount(count - 1);
        }
    }
    function Reset(){
        if(count >0)
        {
            setCount(count-count);
        }
    }

    return (
        <>
            <div className="counter">
                <h1>Counter App</h1>
                <button className="reset" onClick={Reset}>&#x21bb;</button>
                <div className="display">{count}</div>
                <button  className="dec" onClick={Decrement}>-</button>
                {/* <button className="reset" onClick={Reset}>Reset</button> */}
                <button  className="inc" onClick={Increment}>+</button>
               
            </div>
        </>
    )
}