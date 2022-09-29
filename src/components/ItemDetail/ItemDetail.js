import React from "react"
import ItemCount from "../ItemCount"
import {Link} from "react-router-dom"
import { useCartContext } from "../Cart/CartContext"
import { useState } from "react"

const ItemDetail = ({details}) => {
    const [cuenta, setCuenta] = useState(false)
    const {addToCart} = useCartContext()
    const onAdd = (quantity) =>{
        addToCart(details, quantity)
        setCuenta(true)
    }
    
    return (
        <>
            <div className='cardDetail'>
                <h1><strong> {details.title} </strong></h1>
                <img className='imgLego' src={details.image} alt= "fto" />
                <h2>Precio: ${details.price}</h2>
                <p className='description'>Descripción: {details.description}</p>
                
            </div>

            {
                cuenta
                ? <Link to = "/cart/" className="terminar">Terminar Compra</Link>
                : <ItemCount stock = {5} initial = {1} onAdd = {onAdd}/>
            }
            
            <div className="botonDetail">
            <Link to = {"/product/"}>
                <button className = "volver">
                    Volver
                </button>
                
            </Link>
            </div>
            
        </>
        
    )
}

export default ItemDetail