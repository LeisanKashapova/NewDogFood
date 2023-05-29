import {useState, useEffect, createContext} from "react";
import {Routes, Route} from "react-router-dom";
import Api from "./Api"
import Ctx from "./ctx"
import Modal from "./components/Modal";
import {Header, Footer} from "./components/General"; // index.jsx
// Подключаем странички
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import OldPage from "./pages/Old";
import Profile from "./pages/Profile";
import Product from "./pages/ProductPage/index";
import AddProduct from "./pages/AddProduct";
import Favorites from "./pages/Favorites/Favorite";
import Notfoundpage from "./pages/Notfoundpage/Notfoundpage"




;
const App = () => {
    const [user, setUser] = useState(localStorage.getItem("userStore"));
    const [userId, setUserId] = useState(localStorage.getItem("userStore-id"));
    const [token, setToken] = useState(localStorage.getItem("token"));
    
    const [baseData, setBaseData] = useState([]);
    const [goods, setGoods] = useState(baseData);
    const [searchResult, setSearchResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [api, setApi] = useState(new Api(token));
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
        setApi(new Api(token));
        console.log("token", token);
     }, [token])

    useEffect(() => {
        if (token) {
            api.getProducts()
            .then(data => {
                console.log(data)
                setBaseData(data.products);
            })

        } else {
            setBaseData([]);
        }
    }, [api])

    useEffect(() => {
        // console.log("000")
        // console.log(baseData.filter(el => el._id === "622c77cc77d63f6e70967d1e")[0].likes);
        // setGoods(baseData)
    }, [baseData])

    return (
             
        <Ctx.Provider value={{
            searchResult,
            setSearchResult,
            setBaseData,
            baseData,
            goods,
            setGoods,
            userId,
            token,
            api
        }}>
            <Header 
                user={user} 
                upd={setUser} 
                searchArr={baseData}
                setGoods={setGoods} 
                setModalOpen={setModalOpen}
            />
            <main>
                {/* <Search data={setBaseData} setGoods={baseData} /> */}
 <Routes>
    <Route path="/" element={<Home user={user} setActive={setModalOpen}/>}/>
                        
     <Route path="/catalog" element={
         <Catalog 
            goods={goods}
                                
            userId={userId}
             />
    }/>
    <Route path="/old" element={
        <OldPage 
            goods={goods}
            />
    }/>
    <Route path="/profile" element={
        <Profile user={user} setUser={setUser}/>}/>
    <Route path="/product/:id" element={<Product />}/>
    <Route path="/add/product" element={<AddProduct/>}/>
    <Route path="/favorites" element={<Favorites />}/>
    <Route path="*" element={<Notfoundpage />} />
    <Route path="/product/:id" element={<Product />} />
</Routes>
                {/* <>
                <Search data={Product}/>
                {user ? <Catalog data={Product}/> : <Home data={OldPage}/>}
                </> */}
            </main>
            <Footer/>
            <Modal 
                isActive={modalOpen} 
                setIsActive={setModalOpen}
                setUser={setUser}
            />
         </Ctx.Provider>
    )
}
export default App;