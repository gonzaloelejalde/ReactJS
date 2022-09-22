import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "../pages/Home" //Son ejemplos
import Contact from "../pages/Contact"
import Product from "../pages/Product"
import Cart from "../pages/Cart"
import ItemDetailContainer from "../components/ItemDetailContainer"
import React from "react"


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index element = {<Home/>} />
            <Route path = "/contact/" element = {<Contact/>} />
            {/*En path escribimos lo que el usuario esribira en la url*/}
            <Route path = "/product/" element = {<Product/>} />
            <Route path = "/cart/" element = {<Cart/>}/>
            <Route path = "/item/:id" element = {<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router