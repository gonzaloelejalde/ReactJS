import React from 'react'
import NavBar from '../components/NavBar'
import ItemListContainer from "../components/ItemListContainer"
import CartWidget from "../components/CartWidget"
import Producto from "../components/Producto"

const Product = () => {
    const mostrarMensaje = (() => {
        alert ("Carrito")
    })
    return (
        <div>
            <NavBar />
            <CartWidget />
            <Producto mostrarMensaje={mostrarMensaje}/>
            <ItemListContainer />
        </div>
    )
}

export default Product