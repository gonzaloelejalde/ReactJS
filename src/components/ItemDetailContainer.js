import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import  productos  from '../Producto'

const ItemDetailContainer = () => {

    const [details, setDetails] = useState()
    const {itemId} = useParams()

    useEffect(() =>{
        const getDetails = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos)
            }, 2000)
        })
        getDetails.then(res => setDetails(res.find(products => products.id === itemId)))
    }, [itemId])
    return (
        <>
            <ItemDetail props = {details} />
        </>
    )
}

export default ItemDetailContainer

// import { useState, useEffect } from "react";
// import ItemDetail from "./ItemDetail"
// import {productos} from "../Producto"
// import {useParams} from "react-router-dom"



// const ItemDetailContainer = () => {
//     const [data, setData] = useState ()
//     const {id} = useParams()

//     const task = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(productos)
//         }, 2000)
//     });

//     useEffect(() => {
//         task.then((data) => {
//             setData(data.find (p => p.id === id))
//         })
//     }, )
//     return (
//         <>
//             {data && data.map((i) => 
//             data.id === {id} && (
//                 <ItemDetail key = {"itemdetail" + i} data = {data}/>
//             )
//             )}
//         </>
//     )
    
// }

// export default ItemDetailContainer

// const task = new Promise ((resolve, reject) => 
// setTimeout(() => {
//     resolve(productos)
// }, 2000)
// )

// export function ItemDetailContainer() {
//     const {id} = useParams()
//     const [item, setItem] = useState()

//     useEffect(() => {
//         task.then((data) => {
//             setItem(data.find(p => p.id === id))
//             console.log("id:", id, "p:", data)
//             console.log("asignado", data.find(p => p.id === id))
//         })
//     }, )

//     return(
//         <>
//         {item && item.map((i) =>
//             item.id === {id} && (
//                 <ItemDetail key = {"itemdetail" + i} data = {item}/>
//             )
//         )}
//         </>
//     )
// }
