import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../../App';

const Perent = () => {

    const {count} = useContext(COUNTER_CONTEXT)

    return (
        <div> {/*className='h-screen bg-orange-300'*/}
            <div className='child-container'>
                <h3>parent</h3>
                <h3>{count}</h3>
                {/* <div>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <button onClick={() => setCount((pre) => pre + 1)}>+</button>
                </div> */}
            </div>
        </div>
    );
};

export default Perent;