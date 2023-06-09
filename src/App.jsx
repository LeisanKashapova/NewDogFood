import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Api from "./Api"
import Ctx from "./ctx"
import Modal from "./components/Modal";
import {Header, Footer} from "./components/General";

import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import OldPage from "./pages/Old";
import Profile from "./pages/Profile";
import Product from "./pages/ProductPage/index";
import AddProduct from "./pages/AddProduct";
import Favorites from "./pages/Favorites/Favorite";
import Notfoundpage from "./pages/Notfoundpage/Notfoundpage"
import Basket from "./components/Basket";
import staticNews from "./assets/data/news.json";
import inFavorites from "./pages/Favorites/Favorite"





const App = () => {
    let basketStore = localStorage.getItem("basket12");
    if (basketStore && basketStore[0] === "[") {
        basketStore = JSON.parse(basketStore);
    } else {
        basketStore = [];
    }
    const [user, setUser] = useState(localStorage.getItem("userStore"));
    const [userId, setUserId] = useState(localStorage.getItem("userStore-id"));
    const [token, setToken] = useState(localStorage.getItem("token"));
   
    const [baseData, setBaseData] = useState([]);
    const [goods, setGoods] = useState(baseData);
    const [searchResult, setSearchResult] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [basket, setBasket] = useState(basketStore);
  

    let n1 = sessionStorage.getItem("dogs-news");
    if (n1) {
        n1 = JSON.parse(n1);
    }
    let n2 = sessionStorage.getItem("lenta-news");
    if (n2) {
        n2 = JSON.parse(n2);
    }
    const [news, setNews] = useState(n1 || []);
    const [newsLenta, setNewsLenta] = useState(n2 || []);

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            if (!news.length) {
                fetch(`https://newsapi.org/v2/everything?q=собаки&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
                    .then(res => res.json())
                    .then(data => {
                        const result = data.articles.filter(el => el.source.name === "Techinsider.ru")
                        sessionStorage.setItem("dogs-news", JSON.stringify(result));
                        setNews(result);
                    })
            }
            if (!newsLenta.length) {
                fetch(`https://newsapi.org/v2/everything?q=собаки&sources=lenta&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
                    .then(res => res.json())
                    .then(data => {
                        sessionStorage.setItem("lenta-news", JSON.stringify(data.articles));
                        setNewsLenta(data.articles);
                    })
            }
        } else {
            setNews(staticNews);
        }
    }, []);


    
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
        localStorage.setItem("basket12", JSON.stringify(basket));
    }, [basket])


    useEffect(() => {
        setApi(new Api(token));
      
     }, [token])

    useEffect(() => {
        if (token) {
            api.getProducts()
            .then(data => {
                setGoods(data.products.sort((a, b) =>
                new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
                setBaseData(data.products);
            })

        } else {
            setBaseData([]);
        }
    }, [api])

    useEffect(() => {
      
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
            api,
            basket,
            setBasket,
            Favorites,
            inFavorites,
            news,
            newsLenta
          
        }}>
            <Header 
                user={user} 
                upd={setUser} 
                searchArr={baseData}
                setGoods={setGoods} 
                setModalOpen={setModalOpen}
            />
            <main>
                
 <Routes>
    <Route path="/" element={<Home user={user} setActive={setModalOpen}/>}/>
                        
     <Route path="/catalog" element={
         <Catalog 
            goods={goods}
                                
            userId={userId}
             />
    }/>
    <Route path="/old" element={<OldPage goods={goods}/>}/>
    <Route path="/profile" element={
        <Profile user={user} setUser={setUser}/>}/>
    <Route path="/product/:id" element={<Product />}/>
    <Route path="/add/product" element={<AddProduct/>}/>
    <Route path="/favorites" element={<Favorites />}/>
    <Route path="*" element={<Notfoundpage />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/basket" element={<Basket/>}/>
</Routes>
               
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