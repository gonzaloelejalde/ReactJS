import mouse from "../assets/mouse.png"
// import teclado from "../assets/teclado.png"

export const getProductos = () => {
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve([
            {
                id: 1,
                nombre: "Mouse",
                precio: 5000,
                stock: 5,
                imagen: {mouse},
            },
            // {
            //     id: 2,
            //     nombre: "Teclado",
            //     precio: 7000,
            //     stock: 5,
            //     imagen: {teclado},
            // }
        ])}, 2000)
    })
    return task
}

// export const getHora = () => fetch ("https://api.mercadolibre.com/sites/MLA/search?q=malabares#options").then((res) => res.json())

export const getItem = () => new Promise ((resolve, reject) => {
    resolve(
        {
            id: 1,
            nombre: "Mouse",
            precio: "$5000",
            stock: 5,
            imagen: {mouse},
            descripcion: "Mouse marca RedDragon"
        }
    )})