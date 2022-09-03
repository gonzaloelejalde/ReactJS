import mouse from "../assets/mouse.png"

export const getProductos = () => {
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve([
            {
                nombre: "Mouse",
                precio: 5000,
                stock: 5,
                imagen: {mouse},
            }
        ])}, 2000)
    })
    return task
}
