import js from '@eslint/js'
import React, { useEffect, useState } from 'react'

const Demo = () => {

    const [users,setUsers]=useState([])


    useEffect(async()=>{

        const response=await fetch("")
        const json=response.json()
        setUsers(json)

    })

  return (
    <div>
      <h2>Hello</h2>
      {users}
    </div>
  )
}

export default Demo
