import foto from "../assets/logo.png"

const NavBar = () => {
    return (
        <div>
            <div>
            <h1>Bienvendios</h1>
            <img class="logo" src={foto} alt="" />
            </div>
            <div class="Navbar">
                <ul>
                    <li><a href=".">Inicio</a></li>
                </ul>
                <ul>
                    <li><a href=".">Productos</a></li>
                </ul>
                <ul>
                    <li><a href=".">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
