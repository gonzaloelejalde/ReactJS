import React from 'react'
import NavBar from '../components/NavBar'
import ItemListContainer from "../components/ItemListContainer"
import CartWidget from "../components/CartWidget"
import Producto from "../components/Producto"

const Product = () => {
    return (
        <div>
            <NavBar />
            <CartWidget />
            <Producto />
            <ItemListContainer />
        </div>
    )
}

export default Product