import React from 'react'


const Mascara = () => {

    const evaluarContenido = (e) => {
        const key = e.key
        const isVocal = /[aeiouAEIOU]/g.test(key)
        if (isVocal) e.preventDefault()
    }
    return (
        <div>
            <input type = "text" onKeyDown = {evaluarContenido} />
        </div>
    )
}

export default Mascara