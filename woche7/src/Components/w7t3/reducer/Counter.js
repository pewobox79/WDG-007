import React, { useState, useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'decrement':
            return { count: state.count - 1 }
        case 'increment':
            return { count: state.count + 1 }
        default: return state

    }
};

function Counter() {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function decrement() {
        dispatch({ type: 'decrement' })
    }

    function increment() {
        dispatch({ type: 'increment' })
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <h1>{state.count}</h1>
            <button onClick={increment}>+</button>
        </>
    )
}

export default Counter