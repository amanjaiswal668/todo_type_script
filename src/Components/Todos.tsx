import { useContext } from 'react';
import Item from './TodoItem';

import classes from '../styles/Todos.module.css';
import { TodoContext } from '../Store/todoContext';

// (props : any )-> explicitty setting type of props.
// React.FC -> FC here is a functional component which basically says that the function defined is a react Function Component.
// React.FC is highly discouraged and is not recommended to use. Moreover it has been depricated in v18.
// const Todos: React.FC = (props) => {
//     // props -> todo items
//     return (
//         <Fragment>
//             <p>{props.children}</p>
//             {/* props.children -> children is not recognized by react because of v18, FC is no more in consideration */}
//         </Fragment>
//     )
// }

// ************************************************************************************************************************

// *********************    Code below commented because of context is being used in the later part. *****************************************

// type TodosProps = {
//     // items : string[],  --> Items would be an array of string.
//     items: Todo[],  // --> Items would be an array of Todo (Todo is a user defined class).
//     onRemoveTodo: (todoId: string) => void,
//     children: ReactNode[] | ReactNode;
// }

// const Todos = (props: TodosProps) => {
//     // props -> todo items
//     return (
//         <ul className={classes.todos}>
//             {
//                 props.items.map((item, index) => {
//                     return (
//                         // Redundancy, Voilating SOLID principals
//                         // <li key={item.id}>
//                         //     {item.text}
//                         // </li> 
//                         // To resolve the above issues and improve user readability, we create a new component Item.

//                         <Item
//                             key={item.id}
//                             text={item.text}
//                             // onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//                             onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//                         />
//                     )
//                 })
//             }
//         </ul>
//     )
// }

// ************************************* Using Context **********************************************************
const Todos = () => {
    const todoCtx = useContext(TodoContext)
    return (
        <ul className={classes.todos}>
            {
                todoCtx.items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            text={item.text}
                            onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
                        />
                    )
                })
            }
        </ul>
    )
}

export default Todos