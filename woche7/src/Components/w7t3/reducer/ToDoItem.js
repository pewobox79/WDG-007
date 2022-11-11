import React from 'react';
import { ACTIONS } from './ToDoList';

export default function ToDoItem({ todo, dispatch }) {

    return (
        <div>
            <span style={{ color: todo.completed ? '#AAA' : 'black' }}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>{todo.completed ? "undone" : "done"}</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>delete</button>
        </div>

    )
}