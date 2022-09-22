import React, { useContext } from 'react'
import { CartContext } from '../components/Carrito'
import NavBar from '../components/NavBar'

const Cart = () => {
    const {carrito} = useContext(CartContext)
    console.log(carrito)
    return (
        <div>
            <NavBar/>
            {carrito.length > 0 ? carrito.map(details=>
            <h2>Producto Agregado</h2>)
            : "Carrito Vacio"}

        </div>
    )
}

export default Cart