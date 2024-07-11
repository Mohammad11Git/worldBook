import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({children}) =>{

    const {favorites,setFavorites} = useState([]);

    return{
           

    }


}