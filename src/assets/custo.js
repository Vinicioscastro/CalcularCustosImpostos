import React, { useState, useEffect } from "react";
import "./custo.css";

export default function Custo() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  // const [showNumber1, setShowNuber1] = useState("");

  useEffect(() => {
    setShowName(false);
  }, [name]);

  return (
    <div className="componentecusto">
      <h1>Teste</h1>

      <b>Nome</b>
      <br />
      <input
        type="text"
        name="nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />

      <button onClick={() => setShowName(true)}>enviar</button>
      <br />
      <br />
      {showName && <h1>{name}</h1>}

      <b>Digite 1 numero</b>
      <input
        type="number"
        name="numero1"
        value={numero1}
        onChange={(event) => setNumero1(event.target.value)}
      />
      {console.log(numero1)}
      <br></br>
      <b>Digite 2 numero</b>
      <input
        type="number"
        name="numero2"
        value={numero2}
        onChange={(event) => setNumero2(event.target.value)}
      />
      {console.log(numero2)}
      <br></br>
      <button
        onClick={(event) => {
          console.log(numero1 * numero2);
        }}
      >
        Multiplicar os 2 numeros
      </button>
    </div>
  );
}
