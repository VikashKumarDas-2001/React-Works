import React, { useMemo, useState } from 'react'

export const UseMemo = () => {

    const [add, setAdd] = useState(0);
    const [minus, setMinus]= useState(50);

    const multiplaction = useMemo(function multi(){
        console.log("testing");
        return add*5;
    },[add])

  return (
    <div>
        <h1>uSseMemo</h1>
        {multiplaction}<br></br>
        <button onClick={ ()=> setAdd(add+1)}>Addition</button>
        <br></br>
        <span>{add}</span>
        <br></br>


        <button onClick={()=>setMinus(minus-1)}>Subtraction</button>
        <br></br>
        <span>{minus}</span>
        <br></br>
        

    </div>
  )
}
