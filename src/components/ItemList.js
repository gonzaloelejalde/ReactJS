import React, { useEffect, useState } from 'react'
import { getProductos } from '../app/Item.js'

const ItemList = () => {
    const [p, setP] = useState([])

    useEffect(() => {
        getProductos().then((task) => {
            setP(task) //data
        })
    }, [])
    return (
        <div>
            {
                p.map(producto => <li>{producto.nombre} / Precio: ${producto.precio}</li>)
            }
        </div>
    )
}

export default ItemList