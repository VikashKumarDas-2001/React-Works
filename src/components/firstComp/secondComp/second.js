import { useState } from "react";

function SecondComp(props) {
    const [inputValue, newChangeValue] = useState("");

    const onchange = (event) => {
        newChangeValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} placeholder="Enter your name" onChange={onchange}></input>
            <h3>My name is {inputValue}</h3>
            <h3>I am from {props.add ? (
                <h3 className="loc">{props.add}</h3> 
            ) : (
                <h3 className="noloc">No Address</h3>
            )}</h3>
        </div>
    );
}
export default SecondComp;
