import {Link} from "react-router-dom";
import Logo from "../images/Logo";
import Cart from "../images/Cart";
import Profile from "../images/Profile";
import Favorite from "../images/Favorite";
import {BoxArrowInRight} from "react-bootstrap-icons";
import Search from "../Search";
import {useContext} from "react";
import Ctx from "../../ctx";
// import Bubble from "../Babble";
// import Favorites from "../../pages/Favorites/Favorite";





const Header = ({
    user, 
    searchArr, 
    setGoods, 
    setModalOpen,
   
    
}) => {
    const {basket, Favorites} = useContext(Ctx);
    const login = () => {
        setModalOpen(true)
}

   
return <header>
        <Link to="/"><Logo /></Link>
        <div className="search-block">
            <Search 
            data={searchArr}
            setGoods={setGoods} 
          />


        </div>
        <nav className="header__menu">
 
           {user && <>
             <Link to="/favorites" className="header__link">
             <Favorite title="Избранное"/>
            <span className="favorite__babble">{Favorites.length}</span>
             {/* {Favorites.length > 0 && <span className="header__babble"> */}
             {/* {Favorites.reduce((acc, el) => acc + el.cnt, 0)} */}
                {/* </span>} */}
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
             </>
           }
<span>
{!user && <BoxArrowInRight title="Войти" onClick={login} />}
</span>  
        </nav>
       
       
    </header>
}
export default Header;