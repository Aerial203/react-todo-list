import React, { useState } from "react"
import Todo from "./components/TODO_LIST/Todo"
import NewTodo from "./components/NewTodo/NewTodo"

const todoList = []

const App = () => {
  const [list, setList] = useState(todoList)
  const add_item_handler = (dataItem) => {
    setList((prevList) => {
      return [dataItem, ...prevList]
    })
  }

  return (
    <div>
      <NewTodo onAddList={add_item_handler} />
      <Todo listItems={list} />
    </div>
  )
}

export default App
