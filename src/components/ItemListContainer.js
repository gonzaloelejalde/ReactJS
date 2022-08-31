import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    return (
        <div>
            <h1>Catálogo</h1>
            <div class = "sumaresta">
                <ItemCount onAdd = {(contador) => console.log(contador)}/>
            </div>
        </div>
    )
}

export default ItemListContainer