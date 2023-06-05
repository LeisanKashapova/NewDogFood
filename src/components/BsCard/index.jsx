import {useState, useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {SuitHeart, SuitHeartFill, Cart4, Trash3} from "react-bootstrap-icons";
import {Card, Button} from "react-bootstrap";
import Ctx from "../../ctx";
import "./style.css";

const BsCard = ({
    discount,
    likes,
    name,
    pictures,
    price,
    tags,
    _id 
    
   
}) => {
    const {setBaseData, userId, api, basket, setBasket} = useContext(Ctx);
    const [isLike, setIsLike] = useState(likes.includes(userId));
    const [likeFlag, setLikeFlag] = useState(false);
    const inBasket = basket.filter(el => _id === el.id).length > 0;

    const likeHandler = () => {
        setIsLike(!isLike);
        setLikeFlag(true);
        console.log(setIsLike, "oO");
       
    }
   
    useEffect(() => {
        if (likeFlag) {
            api.setLike(_id, isLike)
                .then(data => {
                
                    setLikeFlag(false);
                    
                    api.getProducts()
                    .then(newData => {
                        console.log(newData)
                        setBaseData(newData.products);
                    })
                })
        }
    }, [isLike])

    const addToBasket = (e) => {
        
        e.preventDefault();
        e.stopPropagation();
        // Нет проверки на то, что товар уже есть в корзине и нужно увеличить его кол-во, как на стр одного товара
        setBasket(prev => [...prev, {
            id: _id,
            price,
            discount,
            cnt: 1
        }])
    }
//   const del = (id) => {
//     setBasket(prev => prev.filter(el => el.id !== id))
//   }
   

    return <Card className="pt-3 h-100" id={"pro_" + _id}>
        
        {userId && <span className="card-like" onClick={likeHandler}>
            {isLike ? <SuitHeartFill/> : <SuitHeart/>}
            </span>}

       
        <Card.Img variant="top" src={pictures} alt={name} className="align-self-center w-auto" height="100"/>
        <Card.Body className="d-flex flex-column position-relative" >
            <Card.Title as="h4">{price} ₽</Card.Title>
            <Card.Text className="text-secondary fs-5 flex-grow-1">{name}</Card.Text>
           
            <Button
                disabled={inBasket}
                
                variant="warning"
                className="w-100 position-relative"
                style={{zIndex: "1"}}
                >
                
            <Cart4 onClick={addToBasket} className="cart4"/>
            <Trash3 className="trash3"/>
              

               
               
            </Button>
        
        </Card.Body>
        <Link to={`/product/${_id}`} className="card-link"></Link>
    </Card>
      
}


export default BsCard;