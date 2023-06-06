import {createContext} from "react";

const Ctx = createContext({
    searchResult: "",
    setBaseData: () => {},
    news:[],
    newsLenta: []
});
export default Ctx;