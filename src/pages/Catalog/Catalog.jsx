import {useContext} from "react";
import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../../components/BsCard";
import Ctx from "../../ctx";
import "./Catalog.css";


const Catalog = ({goods, userId}) => {
	const {searchResult} = useContext(Ctx);
	return <Container className="d-block">
		<Row className="g-4">
		{searchResult && <Col xs={12} className="search-result">
				 {searchResult}
			</Col> }
			{goods.map((pro, i) => (
				// {name, price, likes, _id} => name={pro.name} price={pro.price} _id={pro._id} likes={pro.likes}
				<Col key={i} xs={12} sm={6} md={4} lg={3}>
					<BsCard img={pro.pictures} {...pro} user={userId}/>
				</Col>
			))}
		</Row>
	</Container>
}

export default Catalog;