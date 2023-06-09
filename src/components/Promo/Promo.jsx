import { Corgi } from "../../assets/img";
import { Link } from "react-router-dom";
import "./style.css";



const Adds = ({name, img, text}) => {

const imgStyle = {
    backgroundImage: `url(${Corgi[img]})`
                 }
return <div className="promo__block">
            <div className="promo__text">
                <h3>{name}</h3>
                <p>{text}</p>
                <Link to="/Catalog">Подробнее</Link>
            </div>
        <div className="promo__img" style={imgStyle}/>
        </div>
}

export default Adds;