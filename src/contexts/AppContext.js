import {useState, useEffect, useContext, createContext} from 'react'

const AppContextProvider = ({children}) => {

    return(
        <AppContext.Provider
            values={
                {}
            }
        >
            {children}
        </AppContext.Provider>
    )
}