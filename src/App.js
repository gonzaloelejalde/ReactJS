import NavBar from "./components/NavBar";
import Producto from "./components/Producto"
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./app/styles.css";

const App = () => {
    const mostrarAlerta = () => {
        alert("Carrito de compras")
    }
    return (
        <div>
            <NavBar />
            <CartWidget mostrarMensaje={mostrarAlerta} />
            <Producto mostrarMensaje={mostrarAlerta} />
            <ItemListContainer />
        </div>
    )

}

export default App;

