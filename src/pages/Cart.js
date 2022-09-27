import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { useCartContext } from '../components/Cart/CartContext'


const Cart = () => {
    const {cart, deleteProduct} = useCartContext()
    return (
        <div>
            <NavBar/>
            <p>Este es el Carrito</p>
            {cart.length > 0 ? (
                <>
                <ul>
                    {cart.map((item, index) => {
                        return(<li key = {index}>
                            <p>{item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <img src = {item.image} alt = "ftos"/>
                            <p>${item.quantity*item.price}</p>
                            <button onClick={() => deleteProduct(item.id)}>Eliminar del Carrito</button>
                        </li>
                        )
                    })}
                </ul>
                </>
            ) : <p>El carrito esta vacio</p>}
            
        </div>
    )
}

export default Cart