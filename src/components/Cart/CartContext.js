import {createContext, useContext, useState} from "react"

const cartContext = createContext()

export const {Provider} = cartContext

export const useCartContext = () => useContext (cartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQty, setTotalQty] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (details, quantity) => {
        setTotalQty(totalQty + quantity)
        setTotalPrice(totalPrice + details.price * quantity)

        if(isInCart(details.id)){
            const newCart = cart.map((item)=>{
                if(item.id === details.id){
                    return {...item, quantity: item.quantity + quantity}
                }else {
                    return item
                }
            })
            setCart(newCart)
        }else{
            setCart([...cart, {...details, quantity: quantity}])
        }

        console.log(details)
        console.log(quantity)

        
    }
    const isInCart = (id) => {
        return cart.find((details) => details.id === id)
    }

    const deleteProduct = (id) => setCart(cart.filter(details => details.id !== id))

    const cleanProduct = () => setCart([])

    const valorDelContexto = {cart, addToCart, totalQty, totalPrice, deleteProduct, cleanProduct}

    return <Provider value = {valorDelContexto}>{children}</Provider>
}

export default CartProvider