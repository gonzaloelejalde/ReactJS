import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { useCartContext } from '../components/Cart/CartContext'


const Cart = () => {
    const {cart, deleteProduct, totalPrice, totalQty} = useCartContext()
    return (
        <div>
            <NavBar/>
            <p>Este es el Carrito</p>
            {cart.length > 0 ? <div><p>Cantidad de Productos: {totalQty}</p>
            <p>Precio Total: ${totalPrice}</p></div>
            : "No hay Items"}
            {cart.length > 0 ? (
                <div className='carrito'>
                <ul>
                    {cart.map((item, index) => {
                        return(<li key = {index}>
                            <p>{item.title}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <img src = {item.image} alt = "ftos"/>
                            <p>${item.quantity*item.price}</p>
                            <button onClick={() => deleteProduct(item.id)} className = "btn btn-dark">Eliminar del Carrito</button>
                        </li>
                        )
                    })}
                </ul>
                </div>
            ) : <></>}
            
        </div>
    )
}

export default Cart