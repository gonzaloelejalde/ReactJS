import React from 'react'
import fotocarrito from "../../assets/carrito-de-compras.png"

const CartWidget = ({mostrarMensaje}) => {
return (
    <div>
        <img className ="carritofoto" src={fotocarrito} alt="" onClick={mostrarMensaje}/>
        </div>
    )
}

export default CartWidget