import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Producto from "./components/Producto"
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
// import Api from "./components/Api"
import ItemDetailContainer from "./components/ItemDetailContainer";
import { getItem } from "./app/Item";
import "./app/styles.css";




const App = () => {
    const mostrarAlerta = () => {
        alert("Carrito de compras")
    }
    const [item, setItem] = useState({})
    useEffect(() => {
        getItem().then(item => setItem(item))
    })
    return (
        <div>
            <NavBar />
            <CartWidget mostrarMensaje={mostrarAlerta} />
            <Producto mostrarMensaje={mostrarAlerta} />
            <ItemListContainer />
            <ItemDetailContainer item = {item} />
            {/* <div>
                <Api />
            </div> */}
        </div>
        
    )

}

export default App;

