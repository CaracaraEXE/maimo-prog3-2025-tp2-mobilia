'use client'

import {useState, useContext, createContext, useEffect} from 'react'

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([{}]);

    const handleAddToFavorites = ({title,image,id}) => {
        setFavorites([...favorites, {title, image, id}]);
    }

    useEffect(() => {console.log(favorites)},[favorites]);

    const favoritesQty = favorites.length;

    return(
        <AppContext.Provider
            value={
                {favorites, handleAddToFavorites}
            }
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if(!context){
        throw new Error('use AppContext must be used within a AppContextProvider')
    }
}