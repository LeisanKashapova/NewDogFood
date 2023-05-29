import {useState, useEffect, useContext} from "react";
import {useParams, Link} from "react-router-dom";
import Ctx from "../../ctx";
// import ProductView from "../../components/Product/ProductView";


const Product = () => {
	const { id } = useParams()
	const { api } = useContext(Ctx);
	const [data, setData] = useState({});

	useEffect(() => {
		api.getSingleProduct(id)
			.then(serverData => {
				console.log(id, serverData);
				setData(serverData);
			})
	}, [])


return <>

		{data.name 
			? <>
<div className="productPage">
{/* <ProductView /> */}
</div>
			</> 
			: <div className="info" style={{textAlign: "center"}}>
				Товара {id} не существует<br/>или<br/>он еще не загружен
			</div>
		}
	</>
}

export default Product;


