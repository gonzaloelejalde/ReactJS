import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock = 5, cuentaInicial = 0, onAdd}) => {
    const [contador, setContador] = useState (cuentaInicial)
    if(contador > 5){
        setContador(cuentaInicial)
        console.log("No hay stock")
    }else if(contador < 0){
        setContador(cuentaInicial)
        console.log("No existe")
    }
    return (
    <div>
        Stock: {stock} 
        <button onClick = {() => setContador(cuentaInicial)} className = "sumaresta">Resetear</button>
        <button onClick = {() => setContador(contador - 1)} className = "sumaresta"> - </button>

        {contador}

        <button onClick = {() => setContador(contador + 1)} className = "sumaresta"> + </button>
        
    </div>
    
    )
}

export default ItemCount