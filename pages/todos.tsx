// Class-9 (2:27:00)
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router' //1:45:00 class 10


//useSWR k liye function 27:00
const fetchData = (url: string): any => fetch(url).then(r => r.json())

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
    //---------------x-----useSWR('api',function) 30:00

    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/todos', fetchData)
    //useSWR 1 trha k hook hai too jb data ayega to wo re-Render kryga
    // console.log("data from SWR", data)
    // console.log("error from SWR", error)
    // console.log("isloading from SWR", isLoading)

    //bus 34:00 k bad unhon ne data-Todo me add krdiya mane nhi kiya hai q k wo km mane fetch sy kiya hua hai

    //----------------x--------------- useRouter 1:45:00
    //back ,push ,replace ,query
    const router = useRouter()
    // console.log(router)




    //----------------x--------------- useRouter end


    useEffect(() => {
        // console.log("API Calling....")
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
            <button onClick={() => router.back()}>GO BACK by Router</button>
            <button onClick={() => router.push('/blog')}>GO BlogPage by Router</button>
            <button onClick={() => router.reload()}>Reload by Router</button>
            <button onClick={() => router.replace('/blog')}>Replace by Router remove last History</button>
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


/* Class 10
// 00:00:03 useEffect
// 00:00:05 fetch-Data(by Fetch render it in Todo with color)
// 00:25:00 SWR(fetch Data by NestJS)(ye Copy krna hai)
    npm install swr
// 48:00 SWR fetcher Interface 
//57:00 SWR vs Axios
//1:01:00 Deploy at Vercel
    npm run build
    npm start <----too run build (agar ap koye change bhi kro wo ab reflect nhi hoga q k wo ap k build ko run kr rha hoga)
    Remove-Item -Recurse -Force .\.next (REMOVE build ye GPT ne btaya hai)
1:04:00-Vercel with Git
    // https://next-app2-piaic.vercel.app/   <--deployed link
1:09:00 Docker Deploy (theory)

//1:13:00
Remaining hookes --> useRef ,useContext

//nichy waly code likhna hai
1:17:00 useRef(input per focus i done it in another file) 
1:35:00 standards 
1:41:00 Sir waiting 
1:45:00 useRouter(back,query,replace...)
1:57:00 dynamic Page(for Products OLX,etc..)
2:05:00 end
*/