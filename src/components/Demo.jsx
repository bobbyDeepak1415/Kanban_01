import { useEffect, useState } from "react"

const Demo = () => {

    const [currentStatus,setCurrentStatus]=useState("")


    const statusArr=["online","offline","unKnown","loggedOut"]


    useEffect(()=>{
        
    })


    return(
        <div>

        <h2>Hello</h2>
        <p>{currentStatus}</p>
        </div>
    )

    
}

export default Demo
