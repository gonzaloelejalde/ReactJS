import React from "react"
import {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import NavBar from "../NavBar/NavBar"
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [details, setDetails] = useState({})
    const {itemId} = useParams()

    useEffect(() =>{
        const recuperarItem = getFirestore()
        const recuperarDoc = doc(recuperarItem, "productos", itemId)
        getDoc(recuperarDoc)
        .then(res => setDetails({id: res.id,...res.data()}))
    },[itemId])
    return (
        <>
            <NavBar/>
            <ItemDetail details = {details} />
        </>
    )
}

export default ItemDetailContainer
