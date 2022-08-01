import Card from "../UI/Card"
import ItemList from "./ItemList"
import "./Todo.css"

const Todo = (props) => {
  const get_id = (itemId) => {
    props.onGetItemId(itemId)
  }
  return (
    <Card className="todo-list">
      <div className="todo-list__item">
        {props.listItems.map((listItem) => {
          return (
            <ItemList
              id={listItem.id}
              key={listItem.id}
              item={listItem.item}
              onGetId={get_id}
            />
          )
        })}
      </div>
    </Card>
  )
}

export default Todo
