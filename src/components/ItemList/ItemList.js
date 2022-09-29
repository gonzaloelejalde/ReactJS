import React from 'react'
import Item from "./Item"


const ItemList = ({props}) => {
    return (
        <div className='wrap'>
            {props.map((item, key) => {
                return <Item key = {key} id = {item.id} image = {item.image} title = {item.title} price = {item.price} props = {item}/>
            })}
        </div>
    ) 
} 

export default ItemList

