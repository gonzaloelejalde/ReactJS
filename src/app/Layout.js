import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div><h1>Layout</h1>
        <NavBar />
        <section>
            <Outlet />
        </section>
        <footer>Soy el footer</footer>
        </div>
    )
}

export default Layout