import {Link} from "react-router-dom";
import {Journals} from "react-bootstrap-icons";
import Slider from "../../components/Slider/Slider";


// import Carousele from "./Carousel";
// import { Carousel } from "bootstrap";
// import Product from "../Product";
// import  Card  from "../components/Card/Card";
import "./style.css";
// import Promo from "../../components/Promo/Promo";

const Home = ({user, setActive}) => {
	return (
	<>
	<div className="info">
				<div className="container-info">

					<h3>Крафтовые лакомства для собак</h3>
					<p>Всегда свежие лакомства ручной работы с доставкой по России и миру</p>
			
						{user && <Link to="/catalog" className="info-link">
						<Journals style={{marginRight: "10px"}}/>
						Каталог
						</Link>}
						
						{!user && <>
					<span className="info-link" onClick={() => setActive(true)}>Авторизуйтесь, чтобы получить доступ к сайту</span></>}
				</div>
			</div>


<div className="main-container">
		<div className="pro-banner">
		<div className="banner">
				{/* <span>Подарок за первый заказ!</span>
				<span>Wagg</span> */}
				
		</div>
		</div>
		<Slider desktop={3} mobile={2}/>
		{/* <div className="wrapper-promotional"> */}
			<div className="promotional-container">
				<div className="promotional-rigth"></div>
				<div className="promotional-left"></div>
			</div>
		{/* </div> */}

		<div className="promotional-bottom">
			{/* <div className="promotional-container"> */}
				<div className="promotional-rigth-1"></div>
				<div className="promotional-left-1 "></div>
			{/* </div> */}
		</div>



		<div className="pro-banner">
		<div className="banner">
				{/* <span>Подарок за первый заказ!</span>
				<span>Wagg</span> */}
				
		</div>
		</div>

		</div>
		<Slider/>
		
		</>
	)
}






















export default Home;