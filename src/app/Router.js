import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home" //Son ejemplos
import Contact from "../pages/Contact"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer"
import React from "react"
import ItemListContainer from "../components/ItemList/ItemListContainer"
import CartProvider from "../components/Cart/CartContext"


const Router = () => (
    <CartProvider>
    <BrowserRouter>
        <Routes>
            <Route path = "/index/" element = {<Home/>} />
            <Route path = "/contact/" element = {<Contact/>} />
            {/*En path escribimos lo que el usuario esribira en la url*/}
            <Route path = "/product/" element = {<Product/>} />
            <Route path = "/cart/" element = {<Cart/>}/>
            <Route path = "/product/:Id" element = {<ItemListContainer/>}/>
            <Route path = "/item/:itemId" element = {<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
)

export default Router