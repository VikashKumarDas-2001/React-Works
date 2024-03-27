import React, { useEffect } from 'react';

function Effectprops(props) {
    useEffect(() => {
        alert("Number: " + props.data);
    }, [props.data,props.count ]);

    return (
        <div>
            <h1>Count number is: {props.count}</h1>
            <h1>Data number is: {props.data}</h1>
        </div>
    );
}

export default Effectprops;