import {useNavigate} from "react-router-dom";

const Profile = ({user, setUser}) => {
    const navigate = useNavigate()
    const logOut = () => {
        setUser("");
        localStorage.removeItem("userStore");
        navigate("/");
    }
    return <>
    <h1>Личный кабинет</h1>
    <p>Привет, {user}!</p>
    <button onClick={logOut}>Выйти</button>
    </>
}

export default Profile;