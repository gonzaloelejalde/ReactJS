import React from "react"
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import { useState } from "react"

const ItemDetail = ({details}) => {
    const [setCarrito] = useState(false)
    const onAdd = (q) =>{
        setCarrito(true)
        console.log(`Añadiste ${q} cantidades al carrito`)
    }
    return (
        <>
            <div className='cardDetail'>
                <h1><strong> {details.title} </strong></h1>
                <img className='imgLego' src={details.image} alt= "fto" />
                <h2>Precio: ${details.price}</h2>
                <p className='description'>Descripción: {details.description}</p>
                <ItemCount stock = {5} onAdd = {onAdd}/>
            </div>
            
            <div className="botonDetail">
            <Link to = {"/product/"}>
                <button className = "btn btn-dark">
                    Volver
                </button>
                
            </Link>
            <div className="terminar">
            <Link to = {"/cart/"}><button className = "btn btn-dark"> Terminar compra </button></Link>
            </div>
            </div>
            
        </>
        
    )
}

export default ItemDetail