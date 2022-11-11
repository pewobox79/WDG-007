import React, { useReducer, useState } from 'react';
import ToDoItem from './ToDoItem';


export const ACTIONS = {
    ADD_TODO: "add-todo",
    DELETE_TODO: "delete-todo",
    TOGGLE_TODO: "toggle-todo"
}

function reducer(todos, action) {
    //managed alle nötigen funktionen der Applikation
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)

        default:
            return todos
    }
}


function newTodo(name) {
    //kümmert sich nur um den style des objects
    return { id: Date.now(), name: name, completed: false }
}


export default function ToDoList() {

    const [todos, dispatch] = useReducer(reducer, []); //dispatcher ruf immer die function im useReducer auf => hier die reducer funktion
    const [name, setName] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        //der dispatch trägt die ACTION Einträge für die Function REDUCER() e.g. action.type und action.payload
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    }

    console.log("todos", todos)

    const ListOfToDos = todos.map((todo) => {
        return <ToDoItem key={todo.id} todo={todo} dispatch={dispatch} />
    });

    return (
        <div>
            <h1>todolist</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} />
            </form>
            {ListOfToDos.length < 1 ? "no data" : ListOfToDos}
        </div>
    )
}