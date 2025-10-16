import React, { useEffect, useState } from 'react'

const Demo = () => {

    const [firstName,setFirstName]=useState("")
    const [secondName,setSecondName]=useState("")



    useEffect(()=>{
        fullName()

    },[])

    const fullName=()=>{
const fName=firstName+""+secondName
    }

  return (
    <div>
      <input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      ></input>
      <input
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
      ></input>
      <h2>{firstName}</h2>
    </div>
  );
}

export default Demo
