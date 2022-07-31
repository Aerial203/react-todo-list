import React, { useState } from "react"
import "./TodoForm.css"

const TodoForm = (props) => {
  const [inputValue, setInput] = useState("")

  const todo_handle = (e) => {
    setInput(e.target.value)
  }

  const handle_submit = (e) => {
    e.preventDefault()
    const data = {
      id: new Date().getTime().toString(),
      item: inputValue,
    }
    props.onSaveItem(data)
    setInput("")
  }

  return (
    <form onSubmit={handle_submit}>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <input
            type="text"
            placeholder="Add New Todo List"
            value={inputValue}
            onChange={todo_handle}
          />
        </div>
        <div className="new-todo__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  )
}

export default TodoForm
