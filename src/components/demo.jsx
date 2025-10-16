import React, { useState } from 'react'

const demo = () => {

    const [firstName,setFirstName]=useState("")
    const [secondName,setSecondName]=useState("")


    const fullName=()=>{

    }

  return (
    <div>
      <input
        onChange={(e) => setSecondName(e.target.value)}
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

export default demo
