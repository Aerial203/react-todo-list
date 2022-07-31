import TodoForm from "./TodoForm"
import "./NewTodo.css"

const NewTodo = (props) => {
  const saveDataItemTransfer = (data) => {
    props.onAddList(data)
  }

  return (
    <div className="new-todo">
      <TodoForm onSaveItem={saveDataItemTransfer} />
    </div>
  )
}

export default NewTodo
