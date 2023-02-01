import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import "../components/Child.css"

const Child = () => {


    const { count, setCount } = useContext(COUNTER_CONTEXT)


    return (
        <div> {/*className='h-screen bg-orange-300'*/ }
            <div className='child-container'>
                <h3>{count}</h3>
                <div>
                    <button onClick={()=> setCount(count - 1)}>-</button>
                    <button onClick={()=> setCount((pre)=> pre + 1)}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Child;