import React,{useState} from "react"; //importando useState, atualiza a pagina no momento que o valor é alterado
import './App.css'
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";



import Intervalo from "./components/Intervalo";


function App(){
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  return (
    <div className="App">
      <h1>Projeto-Redux</h1>
      
      <div className="linha">
        <Intervalo min={min} max={max} onMinchanged={setMin} onMaxchanged={setMax}></Intervalo>

      </div>

      <div className="linha">
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>

    </div>
  )
}

export default App;
