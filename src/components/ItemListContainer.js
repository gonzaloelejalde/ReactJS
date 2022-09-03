import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


const ItemListContainer = () => {
    return (
        <div>
            <h1>Catálogo</h1>
            <div class = "sumaresta">
                <ItemList/>
                <ItemCount onAdd = {(contador) => console.log(contador)}/>
            </div>
        </div>
    )
}

export default ItemListContainer