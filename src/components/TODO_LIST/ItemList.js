import React from "react"
import "./ItemList.css"

const ItemList = (props) => {
  return (
    <div className="list-items">
      <label htmlFor={props.id} className="list-label">
        <input
          name="myCheckBox"
          id={props.id}
          type="checkbox"
          className="item-checkbox"
        />
        <span className="list-item">{props.item}</span>
      </label>
    </div>
  )
}

export default ItemList
