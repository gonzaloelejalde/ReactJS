import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { useState } from 'react'
import {collection, addDoc} from "firebase/firestore"
import {db} from "../app/firebase"
import { useCartContext } from '../components/Cart/CartContext'



const Home = () => {
    const { cart } = useCartContext()
    const valorInicial = {
        nombre: "",
        telefono: "",
        email: "",
        items: cart.map(product => ({id: product.id, Nombre: product.title, Precio: product.price, quantity: product.quantity})),
    }

    const [user, setUser] = useState(valorInicial)

    const capturarInputs = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const guardarDatos = async(e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, "orders"), {
                ...user
            })
        } catch (error) {
            console.log(error)
        }
        setUser({...valorInicial})
    }
    return (
        <>
        <div>
            <NavBar />
            Home
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <h3 className='text-center mb-3'>Ingresar usuario</h3>
                <form onSubmit={guardarDatos}>
                    <div className = "card card-body">
                        <div className = "form-group">
                            <input type = "text" name = "nombre" className='form-control mb-3' placeholder='Ingresar el nombre del usuario' 
                            onChange={capturarInputs} value = {user.nombre}/>
                            <input type = "text" name = "telefono" className='form-control mb-3' placeholder='Ingresar el telefono del usuario'
                            onChange={capturarInputs} value = {user.telefono}/>
                            <input type = "text" name = "email" className='form-control mb-3' placeholder='Ingresar el email del usuario'
                            onChange={capturarInputs} value = {user.email}/>
                        </div>
                        <button className='btn btn-dark'>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Home