import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {
    return (
        <div>
            <h1>Catálogo</h1>
            <div className = "sumaresta">
                <ItemList/>
            </div>
        </div>
    )
}

export default ItemListContainer