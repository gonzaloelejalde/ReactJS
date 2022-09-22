import React, { useContext } from "react"
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"
import { useState } from "react"
import { CartContext } from "./Carrito"

const ItemDetail = ({details}) => {
    const {agregarAlCarrito} = useContext(CartContext)
    const [data, setData] = useState([])
    const onAdd = (q) =>{
        setData(q)
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
            <button className = "btn btn-dark" onClick = {() => agregarAlCarrito(data[0])}>Agregar al Carrito</button>
            </div>
            </div>
            
        </>
        
    )
}

export default ItemDetail