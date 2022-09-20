import "./app/styles.css";
import  Router  from "./app/Router";
// import Renderizados from "./components/Renderizados";
// import RenderizadosB from "./components/RenderizadosB";
// import { useState } from "react";
// import Event from "./components/Event"
// import Mascara from "./components/Mascara"
// import Hijo from "./components/Hijo"
// import A from "./components/A";
// import B from "./components/B";
// import Provider from "./app/Provider";




const App = () => {
    // const hacerCosas = () => {
    //     alert ("Hacer Cosas")
    // }
    // const [loading, setLoading] = useState(true)
    return (
        <div>
{/*             
            <button onClick = {() => setLoading(!loading)}>Pulsar</button>
            {
                loading ? <p>Loading</p> : <p>Loaded</p> //Con esto no se ve si es false
            } */}
            <Router />
            {/* <ItemListContainer /> */}
            {/* <ItemDetailContainer producto = {item} /> */}
            {/* <div>
                <Api />
            </div> */}
            {/* <Event/> */}
            {/* <Mascara /> */}
            {/* <Hijo hacerCosas={hacerCosas}/> */}
            {/* <Provider>
                <A/>
                <B/>
            </Provider> */}
        </div>
        
    )

}
export default App


// {/* 
// const [seVeA, setseVeA] = useState(true)
//     return (
//         <div>
//             <button onClick = {() => setseVeA(!seVeA)}>Pulsar</button>
//             {
//                 seVeA && <Renderizados/> //Con esto no se ve si es false
//             } */}