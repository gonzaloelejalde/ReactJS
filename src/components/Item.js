import React from "react"
import ItemCount from "./ItemCount"
import {Link} from "react-router-dom"

const Item = (data) => {
    return (
        <div className="cartas">
            <div className="container">
                        <div className="card">
                            <div className="card-body" key = {data.id}>
                                <h4 className="card-title">{data.title}</h4>
                                <img src = {data.image} className = "foto" alt = "Item"/>
                                <p>Precio: ${data.price}</p>
                                <Link to = {`/item/${data.id}/`}>
                                <button className = "btn btn-dark">Detalles del producto</button>
                                </Link>
                                <ItemCount onAdd={(contador) => console.log(contador)} />
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Item

