import React from 'react';
import "../components/Child.css"

const Child = () => {
    return (
        <div className='h-screen bg-gray-300'>
            <div className='child-container'>
                <h3>0</h3>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </div>
    );
};

export default Child;