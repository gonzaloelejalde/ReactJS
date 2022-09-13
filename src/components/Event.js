import React, { useEffect } from 'react'
import { useState } from 'react'

const Event = () => {
    const [n, setN] = useState(0)

    const onResize = () => {
        console.log("7")
    }
    useEffect(() => {
        document.addEventListener("scroll", onResize)
    }, [])
    const hacerCosas1 = (e) => {
        e.stopPropagation()
        alert(1111)
    }
    const hacerCosas2 = (e) => {
        alert(2222)
    }     
    return (
        <div>
            {n}
            <button onClick = {() => setN(n + 1)}>Pulsar</button>
            <button onClick = {(e) => console.log(e)}>Pulsar</button>
            <div onClick = {hacerCosas2}>
                <div onClick = {hacerCosas1}>
                    Pulsame
                </div>
            </div>
        </div>

    )
}

export default Event