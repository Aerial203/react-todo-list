import Todo from "./components/TODO_LIST/Todo"
import NewTodo from "./components/NewTodo/NewTodo"

const App = () => {
  const todoList = [
    {
      id: 1,
      item: "Eat",
    },
    {
      id: 2,
      item: "sleep",
    },
    {
      id: 3,
      item: "code",
    },
    {
      id: 4,
      item: "repeat",
    },
  ]
  const add_item_handler = (dataItem) => {
    console.log(dataItem)
  }

  return (
    <div>
      <NewTodo onAddList={add_item_handler} />
      <Todo list={todoList} />
    </div>
  )
}

export default App
