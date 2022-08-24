// import personas from "./data/personas.json";
import NavBar from "./components/NavBar";
import "./app/styles.css";

// function App() {
//   const devolverAmor= () => "amor"
  
//   const devolverCuadrado = () =><div style ={{width: 100, height: 100, background: "red"}}></div>

//   const hacerCosas = () => alert ("aaa")
//   return (
//     <div className="App">
//       <p>Periferia</p>
//       {
//         personas.map(persona => (
//           <div>
//             <p>Nombre: {persona.nombre}</p>
//             <p>Edad: {persona.edad}</p>
//             <hr />
//           </div>
//         ))
//       }
//       {2 + 2}
//       {devolverAmor()}
//       {
//         ["a", "b", "c"].map(letra => <p>{letra}</p>)
//       }
//       {
//         devolverCuadrado()
//       }
//       <div style ={{width: 300, height: 300, background: "blue"}} onClick={hacerCosas}></div>
//       </div>
//   );
// }

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  )
}

export default App;
