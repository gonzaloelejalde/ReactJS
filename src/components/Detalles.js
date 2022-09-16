import mouse from "../assets/mouse.png"
import teclado from "../assets/teclado.png"

export const getItem = () => new Promise ((resolve, reject) => {
    resolve(
        {
            id: 1,
            title: "Mouse",
            price: "$5000",
            stock: 5,
            image: mouse,
            descripcion: "Mouse marca RedDragon"
        },
        {
            id: 2,
            title: "Teclado",
            price: 7000,
            stock: 5,
            image: teclado,
            descripcion: "Teclado marca RedDragon"
        }
    )})