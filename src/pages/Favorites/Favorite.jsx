import {useContext, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../../components/BsCard";
import Ctx from "../../ctx";
import {Link} from "react-router-dom";
import { EmojiFrown, Journals } from "react-bootstrap-icons";
import BackBtn from "../../components/BackBtn";


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
    const [likeCards] = useState(baseData.filter(el => el.likes.includes(userId)));

return ( 
    <Container className="d-block">
        <Row className="g-4">
            <Col xs={12}>
            <BackBtn />
        {likeCards.length > 0 && 
        <h3 style={{margin: 0, gridColumnEnd: "span 3"}}>Любимые товары</h3>}  
            </Col>
        {likeCards.length === 0 && <ShowNothingFav/>}
        {baseData.filter(el => el.likes.includes(userId)).map((pro, i) => (
                <Col key={i} xs={12} sm={6} md={4} lg={3}>
                    <BsCard img={pro.pictures} {...pro} user={userId}/>
                </Col>
            ))}


                  
        </Row>
    </Container>
    
    )
}

export default Favorites;