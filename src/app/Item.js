export const getProductos = () => {
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve([
            {
                nombre: "Auriculares",
                precio: 5000,
                stock: 5,
            },
            {
                nombre: "Monitor",
                precio: 40000,
                stock: 3,
            }
        ])}, 2000)
    })
    return task
}

