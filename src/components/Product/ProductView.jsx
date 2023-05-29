import { Star, Truck, Award, StarFill } from "react-bootstrap-icons";
import { getEnding, getRate } from "../../utilities/utilities";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./style.css";
// import {useParams} from "react-router-dom";
import Ctx from "../../ctx";


const ProductView = () => {
    const [data, setData] = useState({});
    // const { name, discount, price, description, pictures, reviews, likes, id } = Ctx;
    const { name, id } = Ctx;
    let rate = getRate();
    const stars = []
    // for (let i = 0; i < 5; i++) {
    //     i < rate ? stars.push(<StarFill key={`${StarFill}` + i} fill="#FFE44D" stroke="#1A1A1A" />) : stars.push(<Star key={`${Star}` + i} />)
    // }
    // let isLiked = likes ? likes.includes(user._id) : false


        

return (
    <div>
        <Link to={`/catalog#pro_${id}`}>Назад</Link>

<h1>{name}</h1>
				<div className="wrapper-rating">
	<span>Артикул: </span>
	<span className="product-rating">{[...stars]}</span>
	{/* <span>{!!reviews ? `${reviews.length} отзыв${getEnding(reviews.length)}` : "Ещё нет отзывов"}</span> */}
				</div>
	<div className="info-wrapper">
		<div className="pruduct-wrapper">
		<img className="product-img" src={data.pictures} alt={name} />
		<div className="pruduct-action-wrapper">
{/* {!!discount ? <span className="product__old-price">{price} ₽</span> :
 <span className="product__old-price"></span>}
{!!discount ? <span className="product__price-red">{price - (price * discount) / 100} ₽</span> : 
<span className="product__price-black">{data.price - (data.price * discount) / 100} ₽</span>} */}

<div className="pruduct-action-buttons">
    <div className="product__quantity-counter">
        <button className="quantity-counter-btn">-</button>
            <span>0</span>
             <button className="quantity-counter-btn">+</button>
    </div>
         <button className="product__card-btn">В корзину</button>
</div>
	<div className="product-favorite">
		<span>В избранное</span>
	</div>

	<div className="placeholrer-delivery">
       <Truck width="24" height="24" />
            <div className="placeholrer-delivery__text">
                <h3>Доставка по всему Миру!</h3>
                 <p>Доставка курьером — <b>от 399 ₽</b></p>
                 <p>Доставка в пункт выдачи — <b>от 199 ₽</b></p>
              </div>
    </div>
     <div className="placeholrer-guarantee">
        <Award width="24" height="24" />
            <div className="placeholrer-guarantee__text">
                <h3>Гарантия качества</h3>
                 <p>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
             </div>
	</div>	
</div>
		</div>
		<div className="description-wrapper">
            <h2>Описание</h2>
            <p>{data.description}</p>
        </div>
        <div className="specifications-wrapper">
            <h2>Характеристики</h2>
            <div>тут будут характеристики</div>
        </div>
        </div>
	</div>
)
}

// export default ProductView;