import Card from "../UI/Card"
import ItemList from "./ItemList"
import "./Todo.css"

const Todo = (props) => {
  return (
    <Card className="todo-list">
      <div className="todo-list__item">
        <ItemList item={props.list[0]} />
        <ItemList item={props.list[1]} />
        <ItemList item={props.list[2]} />
        <ItemList item={props.list[3]} />
      </div>
    </Card>
  )
}

export default Todo
