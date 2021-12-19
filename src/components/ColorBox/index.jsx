import React, { useState } from 'react';

ColorBox.propTypes = {
    
};

function ColorBox(props) {

    const [color, setColor] = useState('white');

    return (
        <div>
            {color}

            <button onClick={() => setColor('black')}>Change black</button>
            <button onClick={() => setColor('white')}>Change white</button>
        </div>
    );
}

export default ColorBox;