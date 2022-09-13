import {useEffect, useState} from 'react'
import {getItem} from '../app/Item'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    useEffect(() => {
        getItem().then ((product) => {
            setProduct(product)
        })
        
    }, [])

    return (
        <ItemDetail producto = {product} />
    )
}

export default ItemDetailContainer
