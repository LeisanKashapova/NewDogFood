import React from "react";
import "./style.css";
import Favorites from "../images/Favorite";

const Bubble = ({ Favorites }) => {
    return (
        <span className="header__bubble" >{Favorites.length}</span>
    )
}

export default Bubble;