import React, { useEffect, useState } from 'react'
import { getProductos } from '../app/Item.js'
import ItemCount from './ItemCount'
import mouse from "../assets/mouse.png"

const ItemList = () => {
    const [p, setP] = useState([])
    useEffect(() => {
        getProductos().then((task) => {
            setP(task) //data
        })
    }, [])
    return (
            <div class = "cartas">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={mouse} alt = ""/>
                            <div className="card-body">
                                <h4 className="card-title">{p.map(producto => <p>{producto.nombre}</p>)}</h4>
                                <p className="card-text text-secondary">{p.map (producto => <p>Precio: ${producto.precio}</p>)} </p>
                                <ItemCount onAdd = {(contador) => console.log(contador)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
} 

export default ItemList

