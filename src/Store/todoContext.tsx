import { createContext, ReactNode, useState } from "react";
import Todo from "../Data/todo";

type TodoContextProps = {
    children?: undefined | ReactNode,
    items: Todo[],
    addTodo: (todoText: string) => void,
    removeTodo: (id: string) => void

}

export const TodoContext = createContext<TodoContextProps>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
})



const TodoContextProvider = (props: TodoContextProps) => {


    const [todos, setTodos] = useState<Todo[]>([]);

    // Add a new todo.
    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        })
    }

    // Remove an existing todo.
    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        })
    }

    const todoContextValue: TodoContextProps = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <>
        <TodoContext.Provider value={todoContextValue}>
            {props.children}
        </TodoContext.Provider>
    </>

}

export default TodoContextProvider;