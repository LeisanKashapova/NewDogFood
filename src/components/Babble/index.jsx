import React from "react";
import "./style.css"

const Bubble = ({ baseData}) => {
    return (
        <span className="header__bubble" >{baseData.length}</span>
    )
}

export default Bubble;