// http://localhost:3000/dynamicPages/ads1 //ads1 jhn likha whn kuch bhi likhogy wo usy dhondyga nhi to ye page show kryga
// [] <-- means dynamic Path

// Class10 1: 57:00 dynamic Page(Routes)
import { useRouter } from 'next/router'
import React from 'react'

export default function Ads() {
    const router = useRouter()
    console.log("router-->", router)
    // pathname:"/dynamicPages/[id]" <---in console
    // query:id:"asdasdasdas"       <---in console

    return (
        <div>
            <h1>
                Ads
            </h1>
            <h3>
                {router.query.id?.toLocaleString().toLocaleUpperCase()}
            </h3>
        </div>
    )
}
