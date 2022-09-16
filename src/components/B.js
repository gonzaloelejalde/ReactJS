import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../app/Provider'


const B = () => {
    const [state, setState] = useContext(AppContext)
    return (
        <>
        {/* <div>{state.a}</div> */}
        <div>{state.map(product => (
            <div>
                Nombre: {product.title} - Precio: {product.price}
            </div>
        ))}</div>
        </>
    )
}

export default B