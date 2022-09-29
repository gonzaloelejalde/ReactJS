import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock = 5, initial = 1, onAdd}) => {
    const [cant, setCant] = useState (0)
    const [quantity, setQuantity] = React.useState(stock)
    const decrease = () => {
        setCant(cant - 1);
        setQuantity(quantity + 1)
    }
    const increase = () => {
        setCant(cant + 1);
        setQuantity(quantity - 1)
    }
    return (
    <div className = "count">
        <button onClick = {
            () => { decrease()}}
            disabled = {cant === initial}
        >
            -
        </button>
        <p>{cant}</p>
        <button onClick = {() => {increase()}}
        disabled = {cant === stock} >
            +
        </button>
        <p>Stock disponible: {quantity}</p>

        <button onClick = {() => {onAdd(cant)}} className = "btn btn-dark">Comprar</button>
    </div>
    
    )
}

export default ItemCount