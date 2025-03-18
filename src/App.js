import './App.css';

const Titulo = () =>{
  return <h1>Programador: </h1>
}


const App = () =>{
  const nombre = 'Rodri';
  return (
    <div className="App">
      <Titulo />
      Hola Mundo, mi nombre es {nombre}
    </div>
  );
}

export default App;
