//1:46:00
import React, { useEffect, useState } from 'react'

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
        setCount((preCount) => {
            console.log("counter after Increament-->", preCount + 1)
            return preCount + 1
        })
    }
    /* 
    State Updates are Asynchronous: When you call setCount in your
     Increment and Decrement functions, React does not immediately 
     update the state. The console.log statement right after setCount 
     will not reflect the updated state immediately due to the asynchronous 
     nature of state updates. If you want to log the updated state, you 
     should use the callback function provided by setCount:
    */

    const Decreament = (): void => {
        // setCount(count - 1)
        setCount(count ? count - 1 : 0) //to stop counter at zero q k zero hua 
        // means false to wo direct 0 set krdyga
        console.log("counter after Decreament-->", count)
    }

    //-----------------x------------ Life-Cycle/ useEffect
    //1st-case useEffect
    useEffect(() => {//ComponentWillMount
        console.log("1st-withOut Dependency Array. Runs EveryTime")
    })

    //2nd-case useEffect
    useEffect(() => {//ComponentDidMount
        console.log("2nd-with Empty Dependency Array. Runs OneTime")
    }, [])

    //3rd-case useEffect
    useEffect(() => {//ComponentDidUpdate
        console.log("3rd-Count me change. Runs whenever change in Count's State")
    }, [count])

    return (
        <>
            <h1>Counter {count}</h1>
            <button onClick={Increament}>Increment</button>
            <button onClick={Decreament}>Decrement</button>

            {count ? <CounterBody /> : ""}
        </>
    )
}

const CounterBody = () => {
    //4th-case useEffect
    useEffect(() => {
        console.log("4tha->I am useEffect of CounterBody")
        return () => {
            console.log("4thB->CounterBody Bye Bye")
        }
    }, [])
    return (
        <>
            <h1>Hello CounterBody</h1>
        </>
    )
}

//2:3:00 lifeCycles