import {useContext, useEffect, useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../../components/BsCard";
import Ctx from "../../ctx";
import "./Catalog.css";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination";
import Sorting from "../../components/Sorting";


// import Sorting from "../../components/Sorting";



const Catalog = ({goods, userId}) => {
	const {searchResult} = useContext(Ctx);
	const paginate = usePagination(goods, 9);
	// const [sort, setSort] = useState(null)

	useEffect(() => {
		paginate.step(1);
	   }, [searchResult])

	return ( <>

	{/* {search && <searchResult />}
    {goods.length === 0 && <NotFound 
	text="Простите, по вашему запросу товаров не найдено" 
	buttonText="На главную" 
	buttonPath="/" 
	/>} */}
            
	
	{goods.length && <Sorting />}

	<Container className="d-block">
		<Row className="g-4">
		{searchResult && <Col xs={12} className="search-result">
				 {searchResult}
			</Col> }
			
{paginate.setDataPerPage().map((pro, i) => (

<Col key={i} xs={12} sm={6} md={4} lg={3}>
<BsCard img={pro.pictures} {...pro} user={userId}/>
				</Col>
			))}
	
		<Pagination hk={paginate} />
		</Row>
	</Container>
	</>
	)
}

export default Catalog;