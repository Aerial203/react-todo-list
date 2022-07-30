import Todo from "./components/TODO_LIST/Todo"

const App = () => {
  const todoList = ["Eat", "sleep", "code", "repeat"]
  return (
    <div>
      <Todo list={todoList} />
    </div>
  )
}

export default App
