import React from "react"
import "./ItemList.css"

const ItemList = (props) => {
  const handle_click = () => {
    props.onGetId(props.id)
  }
  return (
    <div className="list-items">
      <label htmlFor={props.id} className="list-label">
        <input
          name={props.id}
          id={props.id}
          type="checkbox"
          className="item-checkbox"
          onClick={handle_click}
        />
        <span value={props.id} className="list-item">
          {props.item}
        </span>
      </label>
    </div>
  )
}

export default ItemList
