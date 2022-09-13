import React from 'react'
import mouse from "../assets/mouse.png"

const ItemDetail = ({ producto }) => {

    return (
        <div className="detailedInfo">
            <img src={mouse} alt="foto" />
            <ul>
            <li className="itemTitle">{producto.nombre}</li>
            <li>{producto.precio}</li>
            <li >{producto.stock}</li>
            <li className="descripcion">{producto.descripcion}</li>
            </ul>
        </div>
            )
}
export default ItemDetail