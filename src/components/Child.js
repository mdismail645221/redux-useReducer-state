import React, { useState } from 'react';
import "../components/Child.css"

const Child = () => {


    const [count, setCount] = useState(0)


    return (
        <div> {/*className='h-screen bg-orange-300'*/ }
            <div className='child-container'>
                <h3>{count}</h3>
                <div>
                    <button>Decrement</button>
                    <button>Increment</button>
                </div>
            </div>
        </div>
    );
};

export default Child;