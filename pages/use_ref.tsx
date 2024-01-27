import React, { useRef, useEffect } from 'react'

export default function UseRef() {

    const h1Ref = useRef<any>(null)
    // console.log("h1Ref", h1Ref)

    const inputRef = useRef<any>(null)
    // console.log("h1Ref", h1Ref)

    useEffect(() => {
        console.log("input==>", inputRef)
        inputRef.current.focus()
    })


    const foo = () => {
        console.log("h1Ref", h1Ref)
        h1Ref.current.innerHTML = "UseRef Hooks works like a DOM-Manupulation"
    }
    return (
        <>
            <h1 ref={h1Ref}>UseRef Hooks</h1>
            <button onClick={foo}>Update Header</button>
            <input type="text" placeholder='I already Focused' ref={inputRef} />

        </>
    )
}


/*  Class 10 1:17:00
useRef previous-State ko save rakhne k kam ata hai
useRef DOM- k tor pe yhn use hota hai

Console me "h1Ref" me wo "h1" tag k "refrence" ajayega means k uska "DOM" 

*/