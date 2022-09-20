import React, { useEffect } from 'react'

const Renderizados = () => {
    useEffect(() => {
        console.log("Componente Renderizados montado")
        return () => {
            console.log("Componente Renderizados desmontado")
        }
    }, [])
    return (
        <div>Detalle del producto</div>
    )
}

export default Renderizados