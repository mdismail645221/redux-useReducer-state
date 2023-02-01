import React, { useReducer } from 'react';
// import { act } from 'react-dom/test-utils';
import "../components/Child.css"

const Child = () => {

    const initialState = 0;
    const reducer = (state, action) => {
        console.log(action)
        if(action.type === "DECREMENT"){
            return state - action.playload;
        }else if(action.type === "INCREMENT"){
            return state + action.playload ;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div> {/*className='h-screen bg-orange-300'*/}
            <div className='child-container'>
                <h3>{state}</h3>
                <div>
                    <button onClick={()=> dispatch({type: "DECREMENT", playload: 10})}>DECREMENT</button>
                    <button onClick={() => dispatch({ type: "INCREMENT", playload : 10})}>INCREMENT</button>
                </div>
            </div>
        </div>
    );
};

export default Child;