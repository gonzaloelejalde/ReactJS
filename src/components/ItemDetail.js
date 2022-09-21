// import React, { useState, useContext } from 'react'
// import ItemCount from './ItemCount'
// import { Link } from 'react-router-dom'
// import CartContext from '../pages/Cart'

// const ItemDetail = ({ producto }) => {

//     const {addToCart} = useContext(CartContext)

//     const [goToCart, setGoToCart] = useState(false)

//     const onAdd = (count) => {
//         setGoToCart(true);
//         addToCart(producto, count);
//         let stock = producto.stock - count
//         producto.stock = stock

//     return (
//             <div className='DetailContainer' key={producto.id}>
//                 <div className='cardDetail'>
//                     <h1><strong> {producto.title}</strong></h1>
//                     <img className='imgLego' src={producto.image} alt={producto.title} />
//                     <div className='cardDetail2'>
//                         <h2>Precio: ${producto.price}</h2>
//                         <p className='description'>Descripción: {producto.description}</p>
//                     </div>
//                     <div className="d-grid gap-2">
//                         {goToCart ? (<Link to="/cart/" className="btn " type="button">
//                             Ir a mi carrito
//                         </Link>
//                         ) : (
//                             <ItemCount stock={producto.stock} onAdd={onAdd} />
//                         )}
//                         <Link to="/" className="btn btn-lg btn-dark mt-2 " type="button"  >
//                             Seguir Comprando
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             )
// }}
// export default ItemDetail

import React from "react"
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import { useState } from "react"

const ItemDetail = ( data ) => {
    const [carrito, setCarrito] = useState(false)
    const onAdd = (q) =>{
        setCarrito(true)
    }
    return (
        <>
            <div className='cardDetail'>
                <h1><strong> {data.title}</strong></h1>
                <img className='imgLego' src={data.image} alt={data.title} />
                <h2>Precio: ${data.price}</h2>
                <p className='description'>Descripción: {data.description}</p>
                {
                    carrito
                    ?<Link to = "/cart/">Terminar compra</Link>
                    :<ItemCount stock = {data.stock} onAdd = {onAdd} initial = {0}/>
                }
            </div>
            <Link to = {"/"}>
                <button className = "btn btn-dark">
                    Volver
                </button>
            </Link>
        </>
    )
}

export default ItemDetail