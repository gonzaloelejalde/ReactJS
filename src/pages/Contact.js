import React from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom'

const Contact = () => {

    const {id} = useParams()
    return (
        <div>
            <NavBar />
            Contact {id}
        </div>
    )
}

export default Contact