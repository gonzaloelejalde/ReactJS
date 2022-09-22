import "./app/styles.css";
import  Router  from "./app/Router";
// import { useState } from "react";
// import { createItem , getItems, deleteItem, updateItem} from "./app/api";
// import { useEffect } from "react";

const App = () => {
    // const[productName, setProductName] = useState()
    // const[productoId, setProductoId] = useState()
    // const [productos, setProductos] = useState()
        
    // useEffect(() => {
    //     getItems().then (res => setProductos(res))
    // }, [])


    return (
        <div>
            <Router />
            {/* <input type ="text" onChange={e => setProductName(e.target.value)}/>
            <button onClick={async ()=> {
                await createItem({title: productName})
                getItems()
            }}>Save product</button>

            <input type ="text" onChange={e => setProductoId(e.target.value)}/> 

            <button onClick={async ()=> {
                await deleteItem(productoId)
                getItems()
            }}>Delete product</button>

            <button onClick={async ()=> {
                await updateItem(productoId, {title:productName})
                getItems()
            }}>Update product</button>

            {
                productos && productos.map(producto => <p>{producto.id} - {producto.title}</p>)
            } */}
        </div>
        
    )

}
export default App
