import React from "react"
import "./ItemList.css"

const ItemList = (props) => {
  return (
    <div className="list-items">
      <input type="checkbox" className="item-checkbox" />
      <li className="list-item">{props.item}</li>
    </div>
  )
}

export default ItemList
