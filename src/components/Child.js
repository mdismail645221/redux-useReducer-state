import React from 'react';
import "../components/Child.css"

const Child = ({count, setCount}) => {


    // console.log(count)


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