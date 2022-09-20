import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState} from "react"
import {productos} from "../Producto"

const ItemListContainer = () => {
    const [items, setItem] = useState([])
        useEffect(() => {
            const task = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos)
                }, 2000)
            })
            task.then((res) => {
                setItem(res)
            })
        }, [])
    return (
        <div><ItemList props = {items}/></div>
    )
}

export default ItemListContainer