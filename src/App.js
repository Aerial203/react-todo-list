import React, { useState } from "react"
import Todo from "./components/TODO_LIST/Todo"
import NewTodo from "./components/NewTodo/NewTodo"

let todoList = []

const App = () => {
  const [list, setList] = useState(todoList)
  const add_item_handler = (dataItem) => {
    setList((prevList) => {
      return [dataItem, ...prevList]
    })
  }
  const get_item_id = (itemId) => {
    const newList = list.filter((item) => item.id !== itemId)
    setList((prevList) => [...newList])
  }

  return (
    <div>
      <NewTodo onAddList={add_item_handler} />
      <Todo listItems={list} onGetItemId={get_item_id} />
    </div>
  )
}

export default App
