import React from "react"

const Producto = ( {mostrarMensaje, children}) => {
    return(
        <div>
            <p>{children}</p>
            <button onClick = {mostrarMensaje} class = "añadir">Añadir al carrito</button>
        </div>
    )
}

export default Producto

