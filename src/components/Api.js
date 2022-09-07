import React from 'react'
import { useEffect, useState } from 'react'
import {getHora} from "../app/Item.js"

const Api = () => {
    const [hora, setHora] = useState()

    useEffect(() => {
        getHora().then( res => setHora(res))
    },[])
    return (
        <div>
            {hora && hora.country_default_time_zone}
        </div>
    )
}

export default Api