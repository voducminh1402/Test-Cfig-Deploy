import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            {count}
            <button onClick={() => setCount(x => x + 1)}>Increase</button>
        </div>
    );
};

