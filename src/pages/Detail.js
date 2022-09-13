import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer'
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div>
            <NavBar />
            Detalle de los Productos
            <ItemDetailContainer/>
        </div>
    )
}

export default Home