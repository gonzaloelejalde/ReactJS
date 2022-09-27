import React from "react"
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import  productos  from '../../Producto'
import NavBar from "../NavBar/NavBar"

const ItemDetailContainer = () => {

    const [details, setDetails] = useState({})
    const {itemId} = useParams()

    useEffect(() =>{
        const getDetails = new Promise((resolve, reject) => {
                resolve(productos)
            }
        )
        getDetails.then(res => setDetails(res.find(productos => Number(productos.id) === Number(itemId))))
    }, [itemId])
    return (
        <>
            <NavBar/>
            <ItemDetail details = {details} />
        </>
    )
}

export default ItemDetailContainer
