  /*const toggleTodo = (id: number) => { 
    let copyofTodos = JSON.parse(JSON.stringify(todos))
    const index = copyofTodos.findIndex((todo: Todo) => todo.id === id)
    copyofTodos[index].completed = !copyofTodos[index].completed
    setTodos(copyofTodos)
  }*/ 

// Seij ^

import AddToDoForm from "./components/AddToDoForm";
import TodoList from "./components/ToDoList";
import TodoSummary from "./components/ToDoSummary";
import useTodos from "./hooks/UseToDos";
import photo from './assets/als-logo.png';

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
    deleteAllTodos,
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your To-Do's!</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddToDoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <img 
        src={photo}
        alt="Corner asset" 
        className="fixed top-5 right-5 w-48 h-auto z-50" 
      />
      <TodoSummary 
        todos={todos} 
        deleteAllCompleted={deleteAllCompletedTodos}
        deleteAllTodos={deleteAllTodos}
      />
    </main>
  );
}



export default App;