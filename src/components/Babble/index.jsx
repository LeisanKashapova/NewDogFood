import React from "react";
import "./style.css"

const Bubble = ({ products }) => {
    return (
        <span className="header__bubble" >{products.length}</span>
    )
}

export default Bubble;