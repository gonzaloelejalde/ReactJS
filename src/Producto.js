import mouse from "./assets/mouse.png"
import teclado from "./assets/teclado.png"
import auricular from "./assets/auricular.png"
import mousepad from "./assets/mousepad.png"
import monitor from "./assets/monitor.png"

const productos = [
    {
        id: 1,
        title: "Mouse",
        price: "5000",
        stock: 5,
        image: mouse,
        description: "Mouse marca RedDragon",
    },
    {
        id: 2,
        title: "Teclado",
        price: "7000",
        stock: 5,
        image: teclado,
        description: "Teclado marca RedDragon"
    },
    {
        id: 3,
        title: "Auricular",
        price: "10000",
        stock: 5,
        image: auricular,
        description: "Auricular marca Logitech"
    },
    {
        id: 4,
        title: "Mousepad",
        price: "3000",
        stock: 5,
        image: mousepad,
        description: "Mousepad marca HyperX"
    },
    {
        id: 5,
        title: "Monitor",
        price: "30000",
        stock: 5,
        image: monitor,
        description: "Monitor marca Samsung"
    },
    {
        id: 6,
        title: "Micrófono",
        price: "17000",
        stock: 5,
        image: "https://www.venex.com.ar/products_images/1604518019_hxproductquadcasts1zmlg.jpg",
        description: "Micrófono de HyperX"
    }
]

export default productos