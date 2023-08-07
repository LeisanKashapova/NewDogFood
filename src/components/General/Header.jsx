import {Link} from "react-router-dom";
import { useState, useEffect } from "react"; 
import Logo from "../images/Logo";
import Cart from "../images/Cart";
import Profile from "../images/Profile";
import Favorite from "../images/Favorite";
import {BoxArrowInRight} from "react-bootstrap-icons";
import Search from "../Search";
import {useContext} from "react";
import Ctx from "../../ctx";






const Header = ({
    user, 
    searchArr, 
    setGoods, 
    setModalOpen,
   
    
}) => {
    const {basket, baseData, userId, goods} = useContext(Ctx);
    // const [likeCards, setLikeCards] = useState(baseData.filter(el => el.likes.includes(userId)));
    const [likeCnt, setLikeCnt] = useState(0);
    const login = () => {
        setModalOpen(true)}
    useEffect(() => {
        setLikeCnt(goods.filter(el => el.likes.includes(localStorage.getItem("userStore-id"))).length)
    }, [goods]);


   
return <header>
    <div className="header__logo">
    <Link to="/"><Logo /></Link>
    </div>
       
        <div className="search-block">
            <Search 
            data={searchArr}
            setGoods={setGoods} 
          />


        </div>
        <nav className="header__menu">
 
           {/* {user && <> */}
             <Link to="/favorites" className="header__link">
             <Favorite title="Избранное"/>
            <span className="favorite__babble">{likeCnt}</span>
             </Link>
        
         <Link to="/basket" className="header__link">
            <Cart title="Корзина" />
             {basket.length > 0 && <span className="header__babble">
                        {basket.reduce((acc, el) => acc + el.cnt, 0)}
                    </span>}
             </Link>
         <Link to="/profile">
             <Profile title="Личный кабинет" />
             </Link>
             {/* </>
           } */}
<span>
{/* {!user && <BoxArrowInRight title="Войти" onClick={login} />} */}
</span>  
        </nav>
       
       
    </header>
}
export default Header;