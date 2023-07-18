import {useState, useEffect, useContext} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import { Star, Truck, Award, StarFill, Basket2, SuitHeartFill, SuitHeart, Trash3 } from "react-bootstrap-icons";
import { getEnding, getRate } from "../../utilities/utilities";
import BackBtn from "../../components/BackBtn";
// import {Container, Row, Col, Table, Card, Button, Form, ButtonGroup} from "react-bootstrap";
import "./style.css";
import Ctx from "../../ctx";


const Product = () => {
	const { id } = useParams()
	const { api, userId, setBaseData, goods, setGoods, basket, setBasket } = useContext(Ctx);

	const [data, setData] = useState({});
	// const [isLike, setIsLike] = useState();
	const [revText, setRevText] = useState("");
	const [revRating, setRevRating] = useState(0);
	const [hideForm, setHideForm] = useState(true);
	const navigate = useNavigate();
	const tableInfo = [
		{
			name: "wight",
			text: "Вес"
		},
		{
			name: "author",
			text: "Продавец"
		},
		{
			name: "description",
			text: "Описание товара"
		}
	]
	let rate = getRate(data);
    const stars = []
    for (let i = 0; i < 5; i++) {
        i < rate ? stars.push(<StarFill 
            key={`${StarFill}` + i} 
            fill="#FFE44D" stroke="#1A1A1A" />) : stars.push(<Star key={`${Star}` + i} />)
    }
	
   


	const addReview = (e) => {
		e.preventDefault();
		api.setReview(data._id, {
			text: revText,
			rating: revRating
		}).then(d => {
			setData(d);
			setRevText("");
			setRevRating(0);
			setHideForm(true);
		})
	}

	const delReview = (id) => {
		api.delReview(data._id, id).then(d => {
			
			setData(d);
		})
	}
	useEffect(() => {
		api.getSingleProduct(id)
			.then(serverData => {
			setData(serverData);
			})
	}, [])

	const delHandler = () => {
		api.delSingleProduct(id)
			.then(data => {
				
				setBaseData(prev => prev.filter(el => el._id !== id));
				navigate("/catalog");
			})
	}
	

	const [cnt, setCnt] = useState(0);
	const inBasket = basket.filter(el => el.id === id).length > 0;
	const addToBasket = !inBasket
		? (e) => {
			e.preventDefault()
			e.stopPropagation()
			cnt > 1 ? setCnt(0) : setCnt(1)
			setBasket(prev => [...prev, {
				id,
				price: data.price,
				discount: data.discount,
				cnt: 1
			}])
		}
		: (() => { });

		const inc = (id) => {
			setBasket(prev => prev.map(el => {
				if (el.id === id) {
					el.cnt++
				}
				return el;
			}))
		}
		const dec = (id) => {
			setBasket(prev => prev.map(el => {
				if (el.id === id) {
					el.cnt--
				}
				return el;
			}))
		}
		const del = (id) => {
			setBasket(prev => prev.filter(el => el.id !== id))
		}

// const ReviewsList = () => {
// 	return ()}


return  <div className="first-wrap">
	
<BackBtn />

	{data.name
	? <>
<div className="title-wrap">
	{/* {data.author._id === userId && <Basket2 onClick={delHandler}/>} */}
	<h4 className="product__name">{data.name}</h4>
	<div className="rating-wrapper">
	<span>Рейтинг: </span>
    <span className="product___rating">{[...stars]}</span>
	<span>{!!data.reviews ? `${data.reviews.length} отзыв${getEnding(data.reviews.length)}` 
	: "Ещё нет отзывов"}</span>
    </div>
</div>

	{/* <div className="info-wrapper"> */}
	<div className='second-wrap'>
		<div className="product__img-wrapper">
		<img className="product__img" src={data.pictures} alt={data.name} />
		</div>
<div className="delivery">
		<div className="placeholrer-delivery">
    <Truck width="24" height="24" />
    <div className="placeholrer-delivery__text">
        <h6>Доставка по всему Миру!</h6>
        <p>Доставка курьером — <b>от 399 ₽</b></p>
        <p>Доставка в пункт выдачи — <b>от 199 ₽</b></p>
    </div>
</div>

<div className="placeholrer-guarantee">
    <Award width="24" height="24" />
    	<div className="placeholrer-guarantee__text">
    		<h6>Гарантия качества</h6>
     			<p>Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</p>
    	</div>
</div>
</div>

		<div className="pruduct-action-wrapper">
		{!!data.discount ? 
		<span className="product__old-price">{data.price} ₽</span> 
		: <span className="product__old-price"></span>}

    	{!!data.discount ? 
		<span className="product__price red">
			{data.price - (data.price * data.discount) / 100} ₽</span> 
			: <span className="product__price black">
				{data.price - (data.price * data.discount) / 100} ₽</span>}
		</div>	

				{/* {basket.map((el) => el.id === id &&				 */}
<div className='first-buttons'>
    {/* <div className='ctn-bt'>
        <button className='quantity-counter-btn'>-</button>
            <span>0</span>
            <button className='quantity-counter-btn'>+</button>
    </div> */}
	
	<button className="btn-add-basket" onClick={addToBasket} disabled={inBasket}>
	{!inBasket
	? "Добавить в корзину"
	: "В корзине"
	}
	</button> 
			{/* <Trash3 onClick={() => del(el.id)} style={{ cursor: "pointer" }} /> */}
</div>
 {/* )} */}
</div>

{/* {basket.map((el) => el.id === id &&
	<div className="rew-wrapp">
		<div className="basket">
			<tr >
				<td>Количество товара в корзине</td>
				<td >Удалить</td>
				<td >Цена товара</td>
				<td >Сумма со скидкой</td>
			</tr>
		</div>
	<tbody>
		<tr>
		<td className="align-middle">
			<ButtonGroup>
				<Button
					variant="warning"
					disabled={el.cnt === 1}
					onClick={() => dec(el.id)}
					>-</Button>
					<Button variant="light" disabled>{el.cnt}</Button>
				<Button variant="warning" onClick={() => inc(el.id)}>+</Button>
			</ButtonGroup>
		</td>

		<td className="align-middle">
			<Trash3 onClick={() => del(el.id)} style={{ cursor: "pointer" }} />
		</td>
<td className="align-middle">
	{el.price} ₽
</td>
		<td style={{ verticalAlign: "middle" }}>
			{el.discount > 0
			? <>
			<span className="text-danger">{Math.ceil(el.price * el.cnt * ((100 - el.discount) / 100))} ₽</span>
			<del className="ms-2 small text-secondary d-inline-block">{el.price * el.cnt} ₽</del>
			</>
			: <span>{el.price * el.cnt} ₽</span>}
		</td>
</tr>
</tbody>
</div>
)}
<Button
	onClick={addToBasket}
	variant="warning"
	disabled={inBasket}
	className="btn-basket"
	>
{!inBasket
? "Добавить в корзину"
: "В корзине"
}
</Button> */}



{/* <div className="product-favorite"></div> */}
{/* <span onClick={() => setLike(_id, isLiked)}>
    <Like fill={isLiked ? "red" : "none"}/> В избранное</span> */}
{/* {userId && <span className="card-like" onClick={likeHandler}>
  {isLiked ? <SuitHeartFill/> : <SuitHeart/>}
  </span>} */}

{/* </div> */}
	

<div className="description-container">
	{tableInfo.map((el, i) => 
		<div className="description-style" key={i}>
			<p>{el.text}</p>
				<p>{el.name === "author"
				? <>
				<p>Имя: {data[el.name].name}</p>
				<p>Адрес: {data[el.name].email}</p>
				</>
				: data[el.name]
				}</p>
		</div>)}
</div>
					

{data.reviews.length > 0 ? 
<div className="rew-wrapper-container">
	<div>
	<h5>Отзывы</h5>

	{hideForm && <div>
	<button
		className="add-rew"
		onClick={() => setHideForm(false)}
		>
		Добавить отзыв
	</button>
</div>}
</div>


<div className="rew-table">
			{data.reviews.map(el => <div key={el._id}>
			<div className="wer">
			<div className="">
			<span className="d-flex w-100 align-items-center mb-2">
			<span style={{
				width: "30px",
				height: "30px",
				display: "block",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundImage: `url(${el.author.avatar})`,
				marginRight: "1rem",
				borderRadius: "50%"
			}}/>

<span>{el.author.name}</span>
</span>

<span>{el.rating}</span>
<p className="fs-6 text-secondary">{el.text}</p>
	{el.author._id === userId && 
	<div className="">
	<Basket2 onClick={() => delReview(el._id)}/>
</div>}
</div>
</div>
</div>
)}
	
</div>



</div>
: hideForm && <div>
<button className="add-review" onClick={() => setHideForm(false)}>
	Написать отзыв</button></div>
}
	{!hideForm && <div className="new-review">
		<h3>Новый отзыв</h3>
		<span onSubmit={addReview}>
		<span className="">
			<input></input>
		<span htmlFor="rating">Рейтинг (0-5)</span>
		<div className=""
			type="number"
			min={1}
			max={5}
			step={1}
			id="rating"
			value={revRating}
			onChange={(e) => setRevRating(+e.target.value)}
			/>
		</span>
		<div className="">

<div htmlFor="text">Комментарий:</div>
<input></input>
<div className=""
	as="textarea"
	type="text"
	id="text"
	value={revText}
	
	onChange={(e) => setRevText(e.target.value)}
	/>
</div>

<button
	type="reset"
	className="btn-reset-rev"
	onClick={(e) => {
	e.preventDefault();
	setRevText("");
	setRevRating(0);
	setHideForm(true);
}}
	>Отмена</button>

<button className="btn-reset-rev" type="submit">Добавить</button>
</span>
</div>}
</>
: <div>
	<div className="info" style={{textAlign: "center"}}>
		Товара {id} не существует<br/>или<br/>он еще не загружен
	</div>
</div>
}
</div>

}
export default Product;