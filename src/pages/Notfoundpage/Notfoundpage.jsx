import React from "react";
import { Link } from "react-router-dom";
import { EmojiFrown } from "react-bootstrap-icons";
import "./style.css"

const NotFound = ({ buttonText, buttonPath }) => {
    return (
        <div className="searhNotFound">
            <EmojiFrown width="100" height="100" />
            <h2>Такой страницы не существует</h2>
            <Link to={buttonPath}>
                <button className="searhNotFound__button">{buttonText}</button>
            </Link>
        </div>
    )
}

export default NotFound;