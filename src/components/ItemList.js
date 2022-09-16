import React from 'react'
import Item from "./Item"


const ItemList = ({props}) => {
    return (
        <div className='wrap'>
            {props.map((item) => {
                return <Item key = {item.id} image = {item.image} title = {item.title} price = {item.price}/>
            })}
        </div>
    ) 
} 

export default ItemList

