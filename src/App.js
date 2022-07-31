import Todo from "./components/TODO_LIST/Todo"
import NewTodo from "./components/NewTodo/NewTodo"

const App = () => {
  const todoList = ["Eat", "sleep", "code", "repeat"]
  return (
    <div>
      <NewTodo />
      <Todo list={todoList} />
    </div>
  )
}

export default App
