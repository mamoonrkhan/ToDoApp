import type { Todo } from "../types/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
  deleteAllTodos: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
  deleteAllTodos,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  function handleDeleteAllTodos() {
    if (window.confirm("Are you sure you want to delete all To-Do's?")) {
      deleteAllTodos();
    }
  }

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} To-Do's Completed
      </p>

      {completedTodos.length > 0 && (
        <button
          type="button"
          onClick={deleteAllCompleted}
          className="block mx-auto text-red-500 hover:underline text-sm font-medium"
        >
          Delete All Completed
        </button>
      )}

      {todos.length > 0 && (
        <button
          type="button"     
          onClick={handleDeleteAllTodos}
          className="block mx-auto text-red-500 hover:underline text-sm font-medium"
      >
          Delete All To-Dos
        </button>
      )}
    </div>
  );
}