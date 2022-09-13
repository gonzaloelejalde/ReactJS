import React from "react"

const Producto = ( {children}) => {
    return(
        <div>
            <p>{children}</p>
            <button className = "añadir">Añadir al carrito</button>
        </div>
    )
}

export default Producto

