import {useContext, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../../components/BsCard";
import Ctx from "../../ctx";
import "./Catalog.css";
import usePagination from "../../hooks/usePagination";
import Pagination from "../../components/Pagination";
import Sorting from "../../components/Sorting";


// import Sorting from "../../components/Sorting";



const Catalog = ({goods, userId, setBaseData}) => {
	const {searchResult} = useContext(Ctx);
	const paginate = usePagination(goods, 9)

	useEffect(() => {
		paginate.step(1);
	   }, [searchResult])

	return ( <>
	{/* {search && <searchResult />}
            {goods.length === 0 && <NotFound text="Простите, по вашему запросу товаров не найдено" buttonText="На главную" buttonPath="/" />}
            {goods.length && <Sorting />} */}
	
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
	{/* {
	paginate.setDataPerPage().length > 0 &&
	<Col xs={12} className="text-center d-flex justify-content-center flex-column align-items-center overflow-hidden">
		<Pagination hk={paginate} /></Col>
	} */}
	{/* {paginate.setDataPerPage().map(g => 
	<BsCard
            key={g._id} 
            {...g} 
            img={g.pictures} 
            setBaseData={setBaseData}
        />)}  */}
		<Pagination hk={paginate} />
		</Row>
	</Container>
	</>
	)
}

export default Catalog;