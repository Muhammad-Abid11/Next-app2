// Class-9 (2:27:00)
import React, { useEffect, useState } from 'react'

export default function Todos() {
    const [todos, setTodos] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>("")
    const handleChange = (value: string) => {
        // console.log(value)
        setInputValue(value)
    }

    const addTodo = () => {
        console.log("input", inputValue)
        todos.push(inputValue)
        setTodos(todos)
        console.log("todo", todos)
        setInputValue("")
    }

    return (
        <div>
            <h1>Todos</h1>
            <input
                value={inputValue}
                placeholder='Enter Todos'
                type="text"
                onChange={(e) => handleChange(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map((value, index) => {
                    return (
                        <li key={index}>{value}</li>//display/UI component
                    )
                })}
            </ul>
        </div>
    )
}
