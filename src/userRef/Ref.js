import React, { useRef, useState } from 'react';

export const Ref = () => {
    const refElem = useRef(null); // Updated useRef initial value to null
    const [name, setName] = useState("elon musk");

    function handleReset() {
        setName(""); // Resetting name state
        refElem.current.focus(); // Focusing on the input field
    }

    function color() {
        refElem.current.style.color = "red";
    }

    return (
        <div>
            <div className='form-group'> 
                <input
                    type='text'
                    ref={refElem}
                    className='form-control mx-sm-3 mb-2' 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <button className='btn btn-primary' onClick={handleReset}>Reset</button> 
                <button className='btn btn-primary' onClick={color}>Color</button> 
            </div>
        </div>
    );
};
