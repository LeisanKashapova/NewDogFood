import {Link} from "react-router-dom";
import Logo from "../../assents/images/Logo";
// import { createContext } from "react";

import {
    StarFill,
    CartDash,
    PersonSquare,
    BoxArrowInRight
    //BoxArrowLeft
} from "react-bootstrap-icons";

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
{/* {user ? <Search data={searchArr} setGoods={setGoods}/> : {{}} */}

        </div>
        <nav className="header__menu">
 {/* условие если юзер залогинился то он видит этот блок, если нет то не видит, называется условный рендеринг            */}
           {user && <>
             <Link to="/favorites">
             <StarFill title="Избранное" />
             </Link>
         <Link to="/cart">
             <CartDash title="Корзина" />
             </Link>
         <Link to="/profile">
             <PersonSquare title="Личный кабинет" />
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