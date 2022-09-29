import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState} from "react"
import {getFirestore, collection, getDocs} from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItem] = useState([])
        useEffect(() => {
            const recuperarItem = getFirestore()
            const recuperarCollection = collection (recuperarItem, "productos")
            getDocs(recuperarCollection)
            .then(res => setItem(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }, [])
    return (
        <div><ItemList props = {items}/></div>
    )
}

export default ItemListContainer