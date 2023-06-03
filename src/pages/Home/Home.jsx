import {Link} from "react-router-dom";
import {Journals} from "react-bootstrap-icons";
import Slider from "../../components/Slider/Slider";
import "./style.css";
import Banner from "../../components/banner";
import BannerTwo from "../../components/BannerTwo";



const Home = ({user, setActive}) => {
	return (
	<>

	<div className="info">
				<div className="container-info">

					<h3>Крафтовые лакомства для собак</h3>
					<p>Всегда свежие лакомства ручной работы с доставкой по России и миру</p>
			
						{user && <Link to="/catalog" className="info-link">
						
						<button className="catalog">Каталог <Journals/></button>
						</Link>}
						
						{!user && <>
					<span className="info-link" 
					onClick={() => setActive(true)}>Авторизуйтесь, чтобы получить доступ к сайту</span></>}
				</div>
			</div>



		
			<div className="banner-wrap">
			<Banner />
			</div>
		

		<Slider desktop={3} mobile={2}/>
		
			<div className="promotional-container">
				<div className="promotional-1" />
				<div className="promotional-2" />
			</div>
		

		
			<div className="promotional-container">
				<div className="promotional-3" />
				<div className="promotional-4 "/>
			</div>
		

			<div className="banner-wrap">
			<BannerTwo />
			</div>
	<div className="slider2-wrap"><Slider/></div>
		
	
		
		
		
		
		</>
	)
}






















export default Home;