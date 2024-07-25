import {Calcular} from "./components/Calcular";
//import { Arreglo } from './components/Arreglo';
//import { DividirValores } from "./components/DivisionDeValores";
//import { Alumno } from './components/Notas';

//import { Acumulador } from "./components/Acumulador";



//{/*<Alumno/>*/}
function App() {
  return (
    <div className="mt-5" style={{ textAlign: "center" }}>
      {<h1>Calcular el area de un cuadrado</h1>}
      {<Calcular/>}
      {/*<h2>Coloque la cantidad de elementos</h2>/*}
      {<Arreglo/>}
      {/*<h3>Ingrese su nuevo Arreglo</h3>/*}
      {/*<DividirValores/>/*}
      {/*<Alumno/>/*}
      {/*<Acumulador />*/}
    </div>
  );
}



export default App