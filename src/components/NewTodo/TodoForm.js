import "./TodoForm.css"

const TodoForm = () => {
  return (
    <form>
      <div class="new-todo__controls">
        <div class="new-todo__control">
          <input placeholder="Add New Todo List" />
        </div>
        <div className="new-todo__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  )
}

export default TodoForm
