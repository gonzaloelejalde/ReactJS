import React from "react"
import ItemCount from "./ItemCount"

const Item = (props) => {
    return (
        <div className="cartas">
            <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{props.title}</h4>
                                <img src = {props.image} className = "foto" alt = "Item"/>
                                <p>Precio: ${props.price}</p>
                                <button>Detalles del producto</button>
                                <ItemCount onAdd={(contador) => console.log(contador)} />
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Item

