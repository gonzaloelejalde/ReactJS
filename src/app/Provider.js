import {createContext, useState} from 'react'

const Provider = ({children}) => {
    const [state, setState] = useState([
        {
        "title": "Juggling balls",
        "price": 6,
        },
        {
        "title": "Balls",
        "price": 10,
        }
])
    return (
        <AppContext.Provider value = {[state, setState]}>
            {children}
        </AppContext.Provider>
    )
}

export const AppContext = createContext()
export default Provider