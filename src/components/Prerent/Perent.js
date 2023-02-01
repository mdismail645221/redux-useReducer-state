import React from 'react';

const Perent = ({count}) => {
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