import {useNavigate, Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Ctx from "../ctx";
import {Button} from "react-bootstrap"

const Profile = ({setUser}) => {
    const navigate = useNavigate()
    const { api } = useContext(Ctx);
	const [userData, setUserData] = useState({})
    const logOut = () => {
        setUser("");
        localStorage.removeItem("userStore");
        navigate("/");
    }
    useEffect(() => {
      api.getAdmin()
        .then(data => {
          setUserData(data);
        })
    }, [])
    return <>
    <h1>Личный кабинет</h1>
    <p>Привет, {userData?.name || "Таинственный незнакомец"}!</p>
		<div>{userData?.email}</div>
    {/* <Link to="/add/product">Добавить товар</Link> */}
		<Button variant="warning" as={Link} to="/add/product">Добавить товар</Button>
		<br/>
    <button onClick={logOut}>Выйти</button>
    </>
}

export default Profile;