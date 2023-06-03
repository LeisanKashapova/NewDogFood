import {Link} from "react-router-dom";
import Logo from "../images/Logo";
import Cart from "../images/Cart";
import Profile from "../images/Profile";
import Favorite from "../images/Favorite";
import {BoxArrowInRight} from "react-bootstrap-icons";
import Search from "../Search";



const Header = ({
    user, 
    searchArr, 
    setGoods, 
    setModalOpen
}) => {
    const login = () => {
        setModalOpen(true)
}
   
return <header>
        <Logo />
        <div className="search-block">
            <Search 
            data={searchArr}
            setGoods={setGoods} 
          />


        </div>
        <nav className="header__menu">
 
           {user && <>
             <Link to="/favorites">
             <Favorite title="Избранное" />
             </Link>
         <Link to="/cart">
             <Cart title="Корзина" />
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