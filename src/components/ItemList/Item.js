import React from "react"
import {Link} from "react-router-dom"

const Item = (data) => {
    return (
        <div className="cartas">
            <div className="container">
                        <div className="card">
                            <div className="card-body" key = {data.id}>
                                <h4 className="card-title">{data.title}</h4>
                                <img src = {data.image} className = "foto" alt = "Item"/>
                                <Link to = {`/item/${data.id}/`}>
                                <button className = "btn btn-dark">Detalles del producto</button>
                                </Link>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Item

