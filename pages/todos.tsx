// Class-9 (2:27:00)
import React, { useEffect, useState } from 'react'

export default function Todos() {
    // const [todos, setTodos] = useState<string[]>([])
    const [todos, setTodos] = useState<any[]>([])//for "api" q k api sy "string" k ilawa bhi types arhen hen agar "string" rha too nichy "value.title" me red line ayegi
    const [inputValue, setInputValue] = useState<string>("")
    const handleChange = (value: string) => {
        // console.log(value)
        setInputValue(value)
    }

    //Class 10 API-Todo 00:00:05
    // Getdata From API and render it in Todo-list
    useEffect(() => {
        console.log("API Calling....")
        getdata()
    }, [])
    const getdata = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
        // .then(json => console.log(json))
    }
    // console.log("Todo from API", todos)

    const addTodo = () => {
        /*     
            // console.log("input", inputValue)
            todos.push(inputValue)
            setTodos(todos)
            // console.log("todo", todos)
            setInputValue("")
     */

        // for API 
        //Class 10 API-Todo 00:21:47
        let obj: object = {
            completed: true,
            title: inputValue,
            userId: 1,
            id: todos.length + 1
        }
        todos.push(obj)
        setTodos(todos)
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
                    const colored = value.completed;
                    return (
                        // <li key={index}>{value}</li>//display/UI component without API

                        //Class 10 API-Todo 00:00:05
                        <li key={index} style={{ color: colored ? "green" : "red" }}>
                            {value.title}
                        </li>//for API render 
                    )
                })}
            </ul>
        </div>
    )
}
