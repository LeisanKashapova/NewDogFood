import {useContext, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../../components/BsCard";
import Ctx from "../../ctx";
import "./Catalog.css";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination";
import "./Catalog.css";
// import NotFound from "../Notfoundpage/Notfoundpage";
// import Sorting from "../../components/Sorting";

// import SearchResult from "";

const Catalog = ({goods, userId}) => {
	const {searchResult} = useContext(Ctx);
	const paginate = usePagination(goods, 9)

	useEffect(() => {
		paginate.step(1);
	   }, [searchResult])

	return ( <>
	{/* {search && <searchResult />}
            {goods.length === 0 && <NotFound text="Простите, по вашему запросу товаров не найдено" buttonText="На главную" buttonPath="/" />}
            {goods.length && <Sorting />} */}
			
	<Container className="d-block">
		<Row className="g-4">
		{searchResult && <Col xs={12} className="search-result">
				 {searchResult}
			</Col> }
			{paginate.pageData().map((pro, i) => (
				// {name, price, likes, _id} => name={pro.name} price={pro.price} _id={pro._id} likes={pro.likes}
				<Col key={i} xs={12} sm={6} md={4} lg={3}>
					<BsCard img={pro.pictures} {...pro} user={userId}/>
				</Col>
			))}
	{
	paginate.pageData().length > 0 &&
	<Col xs={12} className="text-center d-flex justify-content-center flex-column align-items-center overflow-hidden">
		<Pagination hk={paginate} /></Col>
	}
		</Row>
	</Container>
	</>
	)
}

export default Catalog;