import React, { useState, useEffect } from 'react';
import Effectprops from './Effectprops';

const Effect = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);

    useEffect(() => {
        console.warn("This is useEffect");
    }, [data]);

    return (
        <div>
            <h1>This is a countable number</h1>
            <Effectprops count={count} data={data} />
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <br />
            <button onClick={() => setData(data + 1)}>Update Data</button>
        </div>
    );
};

export default Effect;