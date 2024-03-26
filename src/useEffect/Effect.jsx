import React, { useEffect, useState } from 'react'

const Effect = (()=>{

    const [count, setNumber] = useState(0);
    useEffect(()=>{
        console.warn("This is use effect");
    })

  return (
    <div>
        <h1>This is a countable number</h1>
        <h1>{count}</h1>
        <button onClick={()=>setNumber(count+1)}>Updated Number</button>
    </div>
  )
});

export default Effect;