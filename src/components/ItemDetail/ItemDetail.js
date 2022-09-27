import React from "react"
import ItemCount from "../ItemCount"
import {Link} from "react-router-dom"
import { useCartContext } from "../Cart/CartContext"

const ItemDetail = ({details}) => {
    const {addToCart} = useCartContext()
    const onAdd = (quantity) =>{
        addToCart(details, quantity)
    }
    
    return (
        <>
            <div className='cardDetail'>
                <h1><strong> {details.title} </strong></h1>
                <img className='imgLego' src={details.image} alt= "fto" />
                <h2>Precio: ${details.price}</h2>
                <p className='description'>Descripción: {details.description}</p>
                <ItemCount stock = {5} initial = {1} onAdd = {onAdd}/>
            </div>
            
            <div className="botonDetail">
            <Link to = {"/product/"}>
                <button className = "btn btn-dark">
                    Volver
                </button>
                
            </Link>
            </div>
            
        </>
        
    )
}

export default ItemDetail