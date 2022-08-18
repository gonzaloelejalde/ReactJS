import personas from "./data/personas.json"

function App() {
  return (
    <div className="App">
      <p>Periferia</p>
      {
        personas.map(persona => (
          <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
