import { useContext } from "react";
import {Link} from "react-router-dom";
import {Journals} from "react-bootstrap-icons";
import Slider from "../../components/Slider/Slider";
import "./style.css";
import BannerBottom from "../../components/bannerbottom";
import BannerTop from "../../components/bannertop";
import Promo from "../../components/Promo/Promo";
import addsData from "../../assets/data/adds.json";
import Carousel from "../../components/Carousel";
import News from "../../components/news";
import Ctx from "../../ctx";



const Home = ({user, setActive}) => {
	const { news } = useContext(Ctx);
return (
	<div>
<div className="info">
	<div className="container-info">
		<h5>Крафтовые лакомства для собак</h5>
			<p>Всегда свежие лакомства ручной работы с доставкой по России и миру</p>
			{user && <Link to="/catalog" className="info-link">
			<button className="catalog">Каталог <Journals/></button></Link>}
			{!user && <>
				<span className="info-link" 
				onClick={() => setActive(true)}>Авторизуйтесь, чтобы получить доступ к сайту</span></>}
	</div>
</div>

<div className="banner-wrap">
	<BannerTop />
</div> 
 <Slider desktop={3} mobile={2}/>	

		
			
			<div className="promotional-container">
			<Promo {...addsData[0]}/>
			<Promo {...addsData[1]}/>
			</div>

<div className="banner-wrap">
	<BannerBottom />
</div> 

			<div className="promotional-container">
			<Promo {...addsData[3]}/>
			<Promo {...addsData[4]}/>
			</div>

{news.length > 0 && <div className="news-container">
        <Carousel
         data={news.map((el, i) => <News key={`new-${i}`} data={el} isTitled={true} />)}
         cnt={window.innerWidth < 765 ? 3 : 4}
            />
 </div>}


</div>
	)
}






















export default Home;