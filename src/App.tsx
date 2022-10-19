import './App.css';
import NewTodo from './Components/NewTodo';
import Todos from './Components/Todos';
import TodoContextProvider from './Store/todoContext';

function App() {

  // Create dummy todos.

  // const todos = [
  //   new Todo("Creating a new todo using the class Todo, creating an object of Todo class"),
  //   new Todo(" Other way to create todo would be creating an Interface.")
  // ]

  // *********************** Code below are defined in todoContext, 
  // and hence will be reffered from the context in respective components.     **************************************


  // const [todos, setTodos] = useState<Todo[]>([]);

  // // Add a new todo.
  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   })
  // }

  // // Remove an existing todo.
  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   })
  // }

  // return (
  //   <div className="mainDiv">
  //     <NewTodo onAddTodo={addTodoHandler} />
  //     <Todos items={todos} onRemoveTodo={removeTodoHandler} children={undefined} />
  //   </div>
  // );
  // *********************************************************************************************************
  return (
    <div className="mainDiv">
      <TodoContextProvider items={[]} addTodo={function (todoText: string): void {
        throw new Error('Function not implemented.');
      } } removeTodo={function (id: string): void {
        throw new Error('Function not implemented.');
      } } >
        <NewTodo />
        <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;
