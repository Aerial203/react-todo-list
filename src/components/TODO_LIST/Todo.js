import Card from "../UI/Card"
import ItemList from "./ItemList"
import "./Todo.css"

const Todo = (props) => {
  return (
    <Card className="todo-list">
      <div className="todo-list__item">
        {props.listItems.map((listItem) => {
          return <ItemList key={listItem.id} item={listItem.item} />
        })}
      </div>
    </Card>
  )
}

export default Todo
