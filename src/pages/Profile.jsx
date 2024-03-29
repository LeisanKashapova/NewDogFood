import {useNavigate, Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Ctx from "../ctx";
import {Button, Container, Row, Col, Figure, PencilSquare} from "react-bootstrap";
import UpdatedInput from "../components/UpdatedInput";
import BsCard from "../components/BsCard";
import BackBtn from "../components/BackBtn";
const Profile = ({setUser}) => {
    const navigate = useNavigate()
    const { api, baseData, userId, user } = useContext(Ctx);
	const [userData, setUserData] = useState({});
	// const myProfile = user._id === userId;
	const [inpName, setInpName] = useState(false);
	// const [inpEmail, setInpEmail] = useState(false);
	const [inpAbout, setInpAbout] = useState(false);
	const [inpAvatar, setInpAvatar] = useState(false);

	const updUser = (name, val) => {
		let body = {
			name: userData.name,
			about: userData.about
		}
		if (name === "avatar") {
			body =  {avatar: userData.avatar};
		}
		body[name] = val;
		
		api.updAdmin(body, name === "avatar").then(data => setUserData(data));
	}

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
    <Container style={{gridTemplateColumns: "1fr"}} className="px-0">
			<Row>
			<BackBtn />
				{userData?.name && <>
					<Col xs={12} sm={6}><h1>Личный кабинет</h1>
						<div><UpdatedInput
							val={userData.name}
							isActive={inpName}
							changeActive={setInpName}
							upd={updUser}
							name="name"
						/></div>
						<div className="py-3">{userData.email}</div>
						<div><UpdatedInput
							val={userData.about}
							isActive={inpAbout}
							changeActive={setInpAbout}
							upd={updUser}
							name="about"
						/></div>
					</Col>
					<Col xs={12} sm={6}>
						<Figure>
							<Figure.Image
								src={userData.avatar}
								alt={userData.email}
							/>
							<Figure.Caption>
								 <UpdatedInput
									 val={userData.avatar}
									 isActive={inpAvatar}
									 changeActive={setInpAvatar}
									 upd={updUser}
									 name="avatar"
								 />
							</Figure.Caption>
						</Figure>
					</Col>
				</>}
			</Row>


			
			<Row>
				<Col xs={12}>
					<h3>Мои товары</h3>
					{/* <PencilSquare className='editProfile'
                            onClick={() => setActiveModal('avatar')}/> */}
				</Col>
				{baseData.filter(el => el.author._id === userData._id).map(el => <Col xs={6} md={3} key={el._id}>
					<BsCard {...el}/>
				</Col>)}
			</Row>
			{/* <Link to="/add/product">Добавить товар</Link> */}
			<Button variant="warning" as={Link} to="/add/product">Добавить товар</Button>
			<br/>
			<button onClick={logOut}>Выйти из аккаунта</button>
		</Container>
    </>
}

export default Profile;