import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";

/* SPA - Single Page Application - Приложение с одной страницей */
// import testData from "./assents/data.json";
// Подключаем компоненты
import Modal from "./components/Modal";
import {Header, Footer} from "./components/General"; // index.jsx
// Подключаем странички
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog";
import OldPage from "./pages/Old";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
// import Carousel from "./pages/Home/Carousel";

// import Start from "./pages/start/Start";
const App = () => {
    const [user, setUser] = useState(localStorage.getItem("userStore"));
    const [userId, setUserId] = useState(localStorage.getItem("userStore-id"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    /*
        Есть массив с товарами (основной) [a,b,c] => [b,c] => [a]???
        | |
         U
        Есть массив с товарами фильтруемый [b,c], [a]
    */
    const [baseData, setBaseData] = useState([]);
    const [goods, setGoods] = useState(baseData);
    const [searchResult, setSearchResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    // Сохрани в переменную user то значение, что находится внутри useState
    useEffect(() => {
        if (user) {
            setUserId(localStorage.getItem("userStore-id"));
            setToken(localStorage.getItem("token"));
        } else {
            localStorage.removeItem("userStore-id")
            localStorage.removeItem("token")
            setUserId(null);
            setToken(null);
        }
    }, [user])
    useEffect(() => {
        console.log("token", token);
        if (token) {
            fetch("https://api.react-learning.ru/products", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBaseData(data.products);
                })
        }
    }, [token])
    useEffect(() => {
        setGoods(baseData)
    }, [baseData])
    return (
        <>
            <Header 
                user={user} 
                upd={setUser} 
                searchArr={baseData}
                setGoods={setGoods} 
                setSearchResult={setSearchResult}
                setModalOpen={setModalOpen}
            />
            <main>
                <Routes>
                    <Route path="/" element={<Home user={user} setActive={setModalOpen}/>}/>
                    
                    <Route path="/catalog" element={
                        <Catalog 
                            goods={goods}
                            setBaseData={setBaseData}
                            userId={userId}
                        />
                    }/>
                    <Route path="/old" element={
                        <OldPage 
                            searchText={searchResult}
                            goods={goods}
                        />
                    }/>
                    <Route path="/profile" element={
                        <Profile user={user} setUser={setUser}/>}
                    />
                    {/*
                        :id - параметризованный запрос, где то, что идет после : является различными данными, которые можно вызвать при помощи свойства id
                        {id: "...."}
                        шаблон: /product/:brand/:year/:id
                        /product/samsung/2019/12345
                        /product/samsung/2019/78923
                        /product/xaomi/2022/93838
                        /product/apple/2019/32483
                        шаблон: /product/year/:year
                        {year: "..."}
                        /product/year/2022
                        /product/year/2019
                    */}
                    
                    <Route path="/product/:id" element={<Product />}/>
                </Routes>
            </main>
            <Footer/>
            <Modal 
                isActive={modalOpen} 
                setIsActive={setModalOpen}
                setUser={setUser}
            />
        </>
    )
}
export default App;