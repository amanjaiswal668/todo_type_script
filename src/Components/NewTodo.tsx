import React, { useContext, useRef } from 'react';
import { TodoContext } from '../Store/todoContext';

import classes from '../styles/NewTodo.module.css';

// *********************    Code below commented because of context is being used in the later part. *****************************************

// type NewTodoProps = {
//     onAddTodo: (enteredTodoText: string) => void
// }

// const NewTodo = (props: NewTodoProps) => {
//     const todoRef = useRef<HTMLInputElement>(null);

//     const submitTodo = (event: React.FormEvent) => {
//         event.preventDefault();
//         const enteredText = todoRef.current!.value;

//         if (enteredText.trim().length === 0) {
//             return;
//         }
//         console.log(enteredText);
//         props.onAddTodo(enteredText);
//     }

//     return (
//         <form action="POST" onSubmit={submitTodo} className = {classes.form}>
//             <label htmlFor="text">Todo Text</label>
//             <input type='text' id='text' ref={todoRef} />
//             <button> Add Todo </button>
//         </form>
//     )
// }


// ************************************* Using Context **********************************************************

const NewTodo = () => {
    const todoCtx = useContext(TodoContext);
    const todoRef = useRef<HTMLInputElement>(null);

    const submitTodo = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }
        console.log(enteredText);
        todoCtx.addTodo(enteredText);
    }

    return (
        <form action="POST" onSubmit={submitTodo} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type='text' id='text' ref={todoRef} />
            <button> Add Todo </button>
        </form>
    )
}


export default NewTodo;