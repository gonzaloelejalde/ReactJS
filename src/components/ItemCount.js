import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock = 5, initial = 0, onAdd}) => {
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
    onAdd = (cant) => {
        alert(`Se agregaron ${cant} a tu carrito`)
    }
    return (
    <div>
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
        <button variant = "success" onClick = {() => onAdd(cant)}>Agregar al carrito</button>
        <p>Stock disponible: {quantity}</p>
    </div>
    
    )
}

export default ItemCount