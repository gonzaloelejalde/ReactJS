import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from "../components/ItemList/ItemListContainer"
import CartWidget from "../components/Cart/CartWidget"

const Product = () => {
    return (
        <div>
            <NavBar />
            <CartWidget />
            <ItemListContainer />
        </div>
    )
}

export default Product