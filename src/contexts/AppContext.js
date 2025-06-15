'use client'

import {useState, useContext, createContext, useEffect} from 'react'

const AppContext = createContext();
//Crea el context

//Si tiene use, es un HOOK. se pueden crear propios hooks

export const AppContextProvider = ({children}) => {
    //Logica del context
    const [favorites, setFavorites] = useState([]);

    const handleAddToFavorites = (title,image,id) => {
        favorites.find(fave => fave.id === id) ? 
            alert("Ya se añadió esa peli") 
            : 
            setFavorites([...favorites, {title, image, id}]);
    }

    const handleRemoveFromFavorites = (title, image, id) => {
        setFavorites(favorites.filter(fave => fave.id !== id));
    }

    useEffect(() => {console.log(favorites)},[favorites]);

    const favoritesQty = () => favorites.length;

    return(
        <AppContext.Provider
            value={
                {favorites, handleAddToFavorites, favoritesQty, handleRemoveFromFavorites}
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(!context){
        throw new Error('use AppContext must be used within a AppContextProvider')
    }
    return context;
}

export default AppContext;