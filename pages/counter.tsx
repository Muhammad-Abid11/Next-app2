//1:46:00
import React, { useState } from 'react'

export default function Counter() {


    /*//Stateless update React/Next ko smj nhi aty due to no-reRender
     
    let count = 0
    console.log("coutner-->", count)
    const Increament = (): void => {
        count++
        console.log("counter after Increament-->", count)
    }
    const Decreament = (): void => {
        count--
        console.log("counter after Increament-->", count)
    }
     */

    // StateFull update 
    const [count, setCount] = useState<number>(0) //useState return array 
    const Increament = (): void => {
        setCount(count + 1)
        console.log("counter after Increament-->", count)
    }
    const Decreament = (): void => {
        // setCount(count - 1)
        setCount(count ? count - 1 : 0) //to stop counter at zero q k zero hua 
        // means false to wo direct 0 set krdyga
        console.log("counter after Increament-->", count)
    }

    return (
        <>
            <h1>`Counter {count}`</h1>
            <button onClick={Increament}>Increment</button>
            <button onClick={Decreament}>Decrement</button>
        </>
    )
}
