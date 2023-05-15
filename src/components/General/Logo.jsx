import LogoImg from "../../assents/images/logo.png";
import {Link} from "react-router-dom";
const Logo = () => <Link className="logo" to="/"> 
    {/*<span className="logo__pic"></span>*/}
    <img src={LogoImg} alt="DogFood" />
    <span className="logo__text">DogFood</span>
</Link>
export default Logo;
//указание пути в ректе как "/" ведет на главную страницу