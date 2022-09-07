import React from 'react'
import ItemCount from './ItemCount'
import mouse from "../assets/mouse.png"

const ItemDetail = ({item}) => {
    <div className = "detailedInfo">

        <div>
            <h2>Información detallada</h2>
            <p className = "itemTitle">{item.nombre}</p>
            <img src = {mouse} alt = ""/>
            <p className = "descripcion">{item.descripcion}</p>
            <ItemCount stock = {item.stock}/>
        </div>
    </div>
    // console.log(item.descripcion)
}

export default ItemDetail