import {useContext, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../../components/BsCard";
import Ctx from "../../ctx";
import {Link} from "react-router-dom";
import { EmojiFrown, Journals } from "react-bootstrap-icons";

const ShowNothingFav = () => {
    return (
        <div className="show-nothing">
            <EmojiFrown className="frown"/>
            <h2>Нет любимых товаров</h2>
            <Link to="/catalog">
            <button className="basket-catalog">Добавьте товар <Journals/></button>
            </Link>
            <Link to="/">
            <button className="basket-catalog">На главную</button>
            </Link>
        </div>
    )
}
const Favorites = () => {
    const {userId, baseData} = useContext(Ctx);
    const [likeCards, setLikeCards] = useState(baseData.filter(el => el.likes.includes(userId)));

   
const inFavorites = likeCards.length > 0;

    
   


    return ( 
        inFavorites ?
    <Container className="d-block">
        <Row className="g-4">
            <Col xs={12}>
                <h3 style={{margin: 0, gridColumnEnd: "span 3"}}>Любимые товары</h3>
            </Col>
            {baseData.filter(el => el.likes.includes(userId)).map((pro, i) => (
                <Col key={i} xs={12} sm={6} md={4} lg={3}>
                    <BsCard img={pro.pictures} {...pro} user={userId}/>
                </Col>
            ))}
        </Row>
    </Container>
    : <ShowNothingFav/>
    )
}

export default Favorites;