import React from "react";
import "./custo.css";

export default function Custo() {

    var nome;

  return (
    <div className="componentecusto">
    
      <h1>Teste</h1>
      <b>Nome</b>
      <br />
      <input type="text" name="nome" value={nome}/>
      
      <button onClick={console.log("vinicios")}>
          enviar
      </button>
      <br />
      <br />
    </div>
  );
}
