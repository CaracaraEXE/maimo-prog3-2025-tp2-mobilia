'use client'

import {useState, useContext, createContext} from 'react'

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([{}]);
    return(
        <AppContext.Provider
            value={
                {favorites}
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