import React, { useContext } from "react";
import "./style.css"
import Ctx from "../../ctx";
import { sort } from "../../utilities/utilities";

const Sorting = () => {
    const { goods, setGoods  } = useContext(Ctx)
    const filters = [
        {filter: "popular", title: "Популярные"},
        {filter: "new", title: "Новинки"},
        {filter: "cheap", title: "Сначала дешёвые"},
        {filter: "costly", title: "Сначала дорогие"},
        {filter: "topRate", title: "По рейтингу"},
        {filter: "reviews", title: "По количеству отзывов"},
        {filter: "sale", title: "По скидке"}
     ]
    return (
        <div className="sorting">
            {filters.map(filter =>
 <span className="sorting__point" 
  onClick={() => sort( goods, filter.filter, setGoods)}>{filter.title}
  </span>)}
        </div>
    )
}

export default Sorting;


